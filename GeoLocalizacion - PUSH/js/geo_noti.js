let info = document.querySelector('#info');

function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(function(posicion){
        const latitud = posicion.coords.latitude;
        const longitud = posicion.coords.longitude;
        info.textContent = `Latitud: ${latitud}, Longitud: ${longitud}`;

    },
        function(error){
            console.log(error.message);
        });
}

let boton = document.querySelector('#btn');
btn.addEventListener('click', () => {
    obtenerUbicacion();
});

//Notificacion
const notificar = () => {
    Notification.requestPermission()
    .then(permission => {
        if(permission === 'granted'){
            new Notification('Coordenadas obtenidas');
        }
    })
}