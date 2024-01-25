import { baseURL } from '@/server'
import axios from 'axios'

export const Axios = axios.create({
    baseURL : baseURL,
    headers : {
        'Content-Type':'application/json'
    },
    withCredentials : true
})