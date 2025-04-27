import axios from "axios"
import { getUrl } from "../utilities/functions"

export default axios.create({
    baseURL: getUrl(),
    headers: {
        'Access-Control-Allow-Origin' : '*'
    },
})

export const axiosPrivate = axios.create({
    baseURL: getUrl(),
    headers: {
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin' : '*'
    },
    withCredentials: true
})
