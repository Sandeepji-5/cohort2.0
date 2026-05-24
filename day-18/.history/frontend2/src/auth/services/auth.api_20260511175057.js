
import axios from 'axios'


const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
})



export const register   = async (username, email, password) => {

    try{
        const res = await api.post("/register", {username, email, password})

        return res.data
    }
    catch(err){
        console.log(err);
    }
}