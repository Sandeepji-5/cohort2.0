/* yhi file keval backend se communicate karegi...... */
import axios, { AxiosHeaders } from 'axios'

const api =axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

async function register(username, email, password) {
    try {
        const response = await api.post("/register",
            {
                username,
                email,
                password
            }
          )

          return response.data
    }
    catch (err) {
        throw err
    }
}



async function login(username, password) {

    try {

        const response = await api.post("/login", {
            username,
            password
        })
        return response.data

    }
    catch (err) {
        throw err
    }
}


async function  getMe(){
    try{
        const response = await  api.get('/get-me')

        return response.data
    }
    catch(err)
    {
        throw err 
    }
        
    

}


export  { login, register , getMe}