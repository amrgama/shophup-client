import axios from "../../api/axios";
import { getUrl } from "../../helper/helper.js";
import withInterceptors from "../../utilities/withInterceptors";


const signin= async(data)=>{
    // const axiosPrivate= await withInterceptors();
    const response= await axios.post(`${getUrl()}/login`, data, {
        headers: {'Content-Type': "application/json"},
    })

    return response?.data;
}
const signup= async(data)=>{
    // const axiosPrivate= await withInterceptors();
    const response= await axios.post(`${getUrl()}/register`, data, {
        headers: {'Content-Type': "application/json"},
    })

    return response?.data;
}

export default{
    signin,
    signup
}