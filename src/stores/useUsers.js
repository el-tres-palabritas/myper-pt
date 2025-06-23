import { UserService } from "@/services/UserService"
import { defineStore } from "pinia"

const userService = new UserService()

const useUsers = defineStore('users', {
    state: () => ({
        users: [],
        loading: false
    }),
    actions: {
        async loadUsers() {
            this.loading = true
            try {
                this.users = await userService.getAllUsers()
            } finally {
                this.loading = false
            }
        }
    }
})

export default useUsers