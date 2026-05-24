
import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3000/api/posts",
    withCredentials: true
})

const post = async (username, password) => {
    try{
        const res = await api.get("/getPost", { username, password })  
        return res.data
    }
    catch(err){
        console.log(err);
        throw err;
    }   
}
export default post;


