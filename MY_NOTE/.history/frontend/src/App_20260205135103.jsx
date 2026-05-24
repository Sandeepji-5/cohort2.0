
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
      console.log(res.data);
      e.target.reset();
      alert("Note Created Successfully...")
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

const handleUpdate = ()=>{
alert("updated")
return 
}



  const handleDisAppear = () => [
    setNotes(null)
  ]


  return (
    <>
      <form type='action' onSubmit={handleSubmit}>
        <h1>Where Intention Is Written, Direction Begins... ✍️</h1>

        {/* <h1> create you note ✍️</h1> */}
        <input name="title" type='text' placeholder=' title... '></input>
        <input name="description" type="text" placeholder='description...'></input>
        <button>Create Note</button>
        <button onClick={handleUpdate}>Update</button>
      </form>


      <div className='showHide'>
        <button onClick={fetchNote} >SHOW NOTES</button>
        <button onClick={handleDisAppear} >HIDE NOTES</button>
      </div>



      <div className="notes">
        {notes &&
          notes.map((item, index) => (
            <div className="note" key={item._id || index}>
              <h1>Title: {item.title}</h1>
              <p>Description: {item.description}</p>
              <div className='noteBtn'>

                <button onClick={() => deleteNote(item._id)}>Delete</button>
                <button>Edit</button>

              </div>


            </div>
          ))
        }
      </div>
    </>
  )
}

export default App

