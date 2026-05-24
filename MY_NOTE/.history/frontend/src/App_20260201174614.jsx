
import {useState} from 'react'

function App() {
const [note, setNote] = useState([


])
console.log(note);



  return (
    <>
        <div className="notes">hello
          {
              note.map((item, index) => (

               <div className="note">
                <h1>Title:{item.name}</h1>
                <p>Description:{item.description}</p>
               </div>
              ))
          
          }


         
        </div>
    </>
  )
}

export default App
