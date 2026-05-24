
import {useState} from 'react'
import axios from 'axios'

function App() {
const [note, setNotes] = useState([
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


const handleCLick = ()=>{
  axios.get('http://localhost:3000/api/notes').then((res) => {
    setNotes(res.data.notes)
   
  });
}

const handleDisAppear = ()=>[
  setNotes(null)
]


  return (
    <>
        <button onClick={handleCLick} >SHOW NOTES</button>
        <button onClick={handleDisAppear} >HIDE NOTES</button>
        <div className="notes">
    
          { note &&
          
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
