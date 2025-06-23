import axios from 'axios'

export class UserService {
    constructor() {
        this.http = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/users', //Given API to be consumed
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    async getAllUsers() {
        const res = await this.http.get('/')
        return res.data
    }
    
}