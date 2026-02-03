
import {useState} from 'react'
import axios from 'axios'

function App() {
const [note, setNote] = useState([
{
  "title": "sandeep",
  "description": "Description for sandeep"
},
{
  "title": "Mohan",
  "description": "Description for Mohan"
},
{
  "title": "Rohan",
  "description": "Description for Rohan"
}

])

axios.get('http://localhost:3000/api/notes').then((res) => {
  
  console.log(res.data);
});


  return (
    <>
        <div className="notes">hello
          {
              note.map((item) => (

               <div className="note">
                <h1>Title:{item.title}</h1>
                <p>Description:{item.description}</p>
               </div>
              ))
          
          }


         
        </div>
    </>
  )
}

export default App
