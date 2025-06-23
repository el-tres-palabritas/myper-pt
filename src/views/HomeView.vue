<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import useUsers from '@/stores/useUsers'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const userStore = useUsers()
userStore.loadUsers()

const { users, loading } = storeToRefs(userStore)
const showFormDialog = ref(false)
const newUser = ref({
    name: '',
    username: '',
    email: '',
    phone: ''
})

function onSubmit() {
    showFormDialog.value = false
    newUser.value = { name: '', username: '', email: '', phone: ''}
}
</script>

<template>
    <div class="workspace">
        <div class="dt-wrapper">
            <h1>Listado de Usuarios</h1>
            <DataTable :value="users" :loading="loading" paginator :rows="5" :rowsPerPageOptions="[5,10,20]" tableStyle="min-width: 1000px">
                <Column field="name" header="Nombre"></Column>
                <Column field="username" header="Ápodo"></Column>
                <Column field="email" header="Correo"></Column>
                <Column field="phone" header="Teléfono"></Column>
            </DataTable>
        </div>
        <Button @click="showFormDialog=true">Agregar Usuario</Button>
    </div>
</template>

<style scoped>
.workspace {
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* .workspace Button {
    width: 200px;
} */
.dt-wrapper {
    padding: 25px;
    display: inherit;
    flex-direction: column;
    align-items: center;
}
.dt-wrapper h1 {
    padding-bottom: 25px;
}

</style>