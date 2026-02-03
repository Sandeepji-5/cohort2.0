
import {useState} from 'react'

function App() {
const [note, setNote] = useState([
{
  "name":"sandeep",
  "age":20
},
{
  "name":"Mohan",
  "age":23
},
{
  "name":"Rohan",
  "age":20
}

])
console.log(note);

  return (
    <>
        <div className="notes">
          {
              note.map((item)=> {
                console.log(item.name)
              })
              

              

          }


         
        </div>
    </>
  )
}

export default App
