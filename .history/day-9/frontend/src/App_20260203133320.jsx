
import {useState,useEffect} from 'react'
import axios from 'axios'
import { applyTimestamps } from '../../backend/src/model/noteModel'

function App() {
const [notes, setNotes] = useState([])

console.log("Hello Integration ")

useEffect(()=>{
fetchNote()
},[])


function fetchNote(){
  axios.get('http://localhost:3000/api/notes').then((res) => {
    setNotes(res.data.notes);
    const backendDataNotes = res.data.notes
    console.log("Notes data from Backend :", backendDataNotes )
  });
}

const handleSubmit =(e)=>{
  e.preventDefault();
  const {title, description}= e.target.elements
  
axios.post("http://localhost:3000/api/notes",{
  title: title.value,
  description: description.value
})








  console.log("MY created Note Is :", title.value)
  console.log("MY created Note Is DES :", description.value)


}


const handleDisAppear = ()=>[
  setNotes(null)
]
  return (
    <>
      <form  type='action' onSubmit={handleSubmit}>
        <input name="title" type='text' placeholder='note title '></input>
        <input name="description" type="text" placeholder='note description'></input>
        <button>Create Note</button>

      </form>


        <button onClick={fetchNote} >SHOW NOTES</button>
        <button onClick={handleDisAppear} >HIDE NOTES</button>
        <div className="notes">

          {notes &&
            notes.map((item, index) => (
              <div className="note" key={item._id || index}>
                <h1>Title: {item.title}</h1>
                <p>Description: {item.description}</p>
              </div>
            ))
          }



         
        </div>
    </>
  )
}

export default App
