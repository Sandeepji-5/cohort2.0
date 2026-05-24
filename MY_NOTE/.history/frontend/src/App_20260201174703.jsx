
import {useState} from 'react'

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
console.log(note);



  return (
    <>
        <div className="notes">hello
          {
              note.map((item, index) => (

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
