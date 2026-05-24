
import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export async function getPosts(){
    try{
        const res = await api.get("/posts/feed");
        return res.data
    }
    catch(err){
        console.log(err);
        throw err;
       
    }
}