/* yhi file keval backend se communicate karegi...... */
import axios from 'axios'

const api = axiox.create({
    baseURL
})

async function register(username, email, password) {

    try {
        const response = await axios.post("https://localhost:3000/api/auth/register",
            {
                username,
                email,
                password
            },
            {
                withCredentials: true
            })


    }
    catch (err) {
        throw err
    }
}






async function login(email, password) {

    try {

        const response = await axios.post("http://localhost:3000/api/auth/login", {
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