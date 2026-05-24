
import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3000/api/posts",
    withCredentials: true
})


const post = async (content) => {
    try{
        const res = await api.get("/", {content})  
        return res.data
    }
    catch(err){
        console.log(err);
        throw err;
    }   
}












export default post;
