<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import useUsers from '@/stores/useUsers'
import { storeToRefs } from 'pinia'

const userStore = useUsers()
userStore.loadUsers()

const { users, loading } = storeToRefs(userStore)
</script>

<template>
    <div class="dt-wrapper">
        <h1>Lista de usuarios</h1>
        <DataTable :value="users" :loading="loading" paginator :rows="5" :rowsPerPageOptions="[5,10,20]" tableStyle="min-width: 1000px">
            <Column field="name" header="Name"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phone" header="Phone"></Column>
        </DataTable>
    </div>
</template>

<style scoped>
.dt-wrapper {
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dt-wrapper h1 {
    padding-bottom: 25px;
}

</style>