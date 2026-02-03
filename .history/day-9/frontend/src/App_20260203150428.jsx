
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState([])
  function fetchNote() {
    axios.get('http://localhost:3000/api/notes').then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNote()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements
    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    }).then(res => {
      console.log(res.data)
      fetchNote()
    })
  }
  const deleteNote = (id) => {
  axios.delete("http://localhost:3000/api/notes/" + id)
      .then((res) => {
        console.log("hare krishna ", res.data)
        fetchNote()
      })
  }

  const handleDisAppear = () => [
    setNotes(null)
  ]
  return (
    <>
      <form type='action' onSubmit={handleSubmit}>
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
              <button onClick={() => deleteNote(item._id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App

