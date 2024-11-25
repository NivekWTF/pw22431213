<template>
    <section class="top">
        <h3>Personal</h3>
        <h3></h3>
        <div>
            <button class="btn btn-sm btn-primary">
                Agregar
            </button>
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
