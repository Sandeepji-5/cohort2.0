/* yhi file keval backend se communicate karegi...... */
import axios from 'axios'


async function register(username, email, password){

    try{
      const response =   await axios.post("https://localhost:3000/api/auth/login",{
            username,
            email,
            password
        },{
            withCredentials: true
        }).then(res=>{
            console.log(res.data)
        })

        
    }
    catch(err){
        console.log(err.message)
    }
}






async function login(username, password){





}