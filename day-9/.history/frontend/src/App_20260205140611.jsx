
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

const handleUpdate = (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const { title, description } = form.elements;
  // We need to identify which note is being updated
  // Let's store the editing note's ID in a hidden field or in state.
  // For the sake of completeness, let's add a hidden input to the form and look for it:
  const idInput = form.elements["_id"];
  const noteId = idInput ? idInput.value : null;

  if (!noteId) {
    alert("No note selected for update.");
    return;
  }

  axios.put(`http://localhost:3000/api/notes/${noteId}`, {
    title: title.value,
    description: description.value
  }).then(res => {
    console.log("Note updated:", res.data);
    form.reset();
    // Remove the hidden id field value
    if (idInput) idInput.value = "";
    alert("Note Updated Successfully...");
    fetchNote();
  }).catch(err => {
    alert("Failed to update note.");
    console.error(err);
  });
}

const handleEdit = (id) => {
  const noteToEdit = notes.find(note => note._id === id);
  if (noteToEdit) {
    const form = document.querySelector('form');
    if (form) {
      form.elements.title.value = noteToEdit.title;
      form.elements.description.value = noteToEdit.description;
    }
  }
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
        <button type="button" onClick={handleUpdate}>Update</button>
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
                <button onClick={()=> handleEdit(item._id)}>Edit</button>

              </div>


            </div>
          ))
        }
      </div>
    </>
  )
}

export default App

