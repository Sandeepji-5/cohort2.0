
import {useState,useEffect} from 'react'
import axios from 'axios'

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



const handleDisAppear = ()=>[
  setNotes(null)
]
  return (
    <>
      <form>
        <input></input>








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
