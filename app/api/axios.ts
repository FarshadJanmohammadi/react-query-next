import { create } from "axios";


const api = create({
    baseURL: "/api"
})

export { api }