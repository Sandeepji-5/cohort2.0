/* yhi file keval backend se communicate karegi...... */
import axios, { AxiosHeaders } from 'axios'

const api = AxiosHeaders.create({
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

          rt
    }
    catch (err) {
        throw err
    }
}






async function login(email, password) {

    try {

        const response = await api.post("/login", {
            email,
            password
        },{
            withCredentials:true
        })

    }
    catch (err) {
        throw err
    }



}

export default { login, register }