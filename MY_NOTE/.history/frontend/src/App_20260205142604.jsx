
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState([])
  const [eyed, setEyed] = useState();
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
const handleUpdate = async () => {
  if (!eyed) {
    alert("No note selected for update.");
    return;
  }
  
  const form = document.querySelector('form');
  if (!form) {
    alert("Form not found.");
    return;
  }
  const title = form.elements.title.value;
  const description = form.elements.description.value;

console.log("title:",title)
console.log("description:",description)

  // Ensure we're sending real data (not undefined)
  if (!title.trim() && !description.trim()) {
    alert("Both title and description are empty.");
    return;
  }

  // Confirm note exists before attempting update
  const noteToUpdate = notes.find(note => note._id === eyed);

  if (noteToUpdate) {
    try {
      // Explicitly use PATCH to update possibly only one or both fields
      // Make sure both title and description are being sent
      await axios.patch(`http://localhost:3000/api/notes/${eyed}`, {
        title: title,
        description: description
      });
      alert("Note updated successfully!");
      form.reset();
      setEyed(null);
      fetchNote();
    } catch (err) {
      alert("Failed to update note.");
      console.error(err);
    }
  } else {
    alert("Note does not exist in the database.");
  }
};

const handleEdit = (id) => {
  setEyed(id)

  const noteToEdit = notes.find(note => note._id === id);
  if (noteToEdit) {
    const form = document.querySelector('form');
    if (form) {
      form.elements.title.value = noteToEdit.title;
      form.elements.description.value = noteToEdit.description;
    }
  }
  console.log("the id inn ediot", id)
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

