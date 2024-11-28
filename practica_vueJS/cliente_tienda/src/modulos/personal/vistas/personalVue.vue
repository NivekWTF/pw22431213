<template>
    <section>
        <h3></h3>
        <h3>Personal</h3>
        <div>
        <RouterLink :to="{path: '/personal/agregar/'}">
            <button class="btn btn-sm btn-primary">
                Agregar <i class="fa fa-plus"></i>
            </button>
        </RouterLink>
        </div>
    </section>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Estatus</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="personal.length == 0">
                <td class="centrado" colspan="6">
                    Sin personal registrado
                </td>
            </tr>
            <tr v-else v-for="persona in personal" :key="persona.id">
                <td>{{persona.id}}</td>
                <td>{{persona.nombre}}</td>
                <td>{{persona.direccion}}</td>
                <td>{{persona.telefono}}</td>
                <td>{{persona.estatus}}</td>
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example"></div>
                    <button type="button" class="btn btn-sm btn-outline-primary">
                        <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-danger">
                        <RouterLink class="nav-link item" :to="{path: '/personal/'+persona.id+'/eliminar'}"><i class="fa fa-trash"></i></RouterLink>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { usePersonal } from '../controladores/usePersonal';
    const { traePersonal, personal} = usePersonal();
    onMounted(async() => {
       await traePersonal();
    });
</script>

<style scoped>

    section{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        margin-top: 20px;
    }
    .centrado {
        text-align: center;
    }
</style>
