
import { useState, useEffect , useRef} from 'react'
import axios from 'axios'


function App() {
  const [notes, setNotes] = useState([])
  const [eyed, setEyed] = useState();
  const [formData, setFormData]= useState({
    title:"",
    description:""
  })

  const formRef = useRef(null)



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
      setFormData({
        title:"",
        description:""
      })
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
    const title2 = formData.title.trim();
    const description2 = formData.description.trim();
  
    if (!title2 && !description2) {
      alert("Nothing to update.");
      return;
    }
  
    try {
      console.log("Sending data:", { title: title2, description: description2 });
  
      await axios.patch(
        `http://localhost:3000/api/notes/${eyed}`,
        {
          title: title2,
          description: description2
        }
      );
  
      alert("Note Updated Successfully!");
      setEyed("");
      setFormData({ title:"",
        description:""})
      fetchNote();
    } catch (error) {
      console.error(error);
      alert("Failed to update note.");
    }

  };



const handleEdit = (id) => {
  setEyed(id);
  const noteToEdit = notes.find(note => note._id === id);
  if (noteToEdit) {
    setFormData({
      title: noteToEdit.title || '',
      description: noteToEdit.description || ''
    });
  }
  if (formRef && formRef.current) {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  console.log("the id in edit", id);
}

  const handleDisAppear = () => [
    setNotes(null)
  ]


  return (
    <>
      <form  ref={formRef} type='action' onSubmit={handleSubmit}>
        <h1>Where Intention Is Written, Direction Begins... ✍️</h1>

        {/* <h1> create you note ✍️</h1> */}
        <input
          name="title"
          type="text"
          placeholder=" title... "
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          name="description"
          type="text"
          placeholder="description..."
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
        />
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

