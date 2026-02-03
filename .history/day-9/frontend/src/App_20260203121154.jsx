
import {useState} from 'react'
import axios from 'axios'

function App() {
const [note, setNotes] = useState([])


const handleCLick = ()=>{
  axios.get('http://localhost:3000/api/notes').then((res) => {
    setNotes(res.data.notes)
    console.log("Notes data from Backend :", note)
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

          {note &&
            note.map((item, index) => (
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
