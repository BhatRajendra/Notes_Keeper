import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';


function CreateArea(props) {
  const [clicked,setClicked]=useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleClick(){
    setClicked(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    //setClicked(true);
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if(!note.content==="" && !note.title===""){
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {clicked?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null} 
          <textarea
          name="content"
          onClick={handleClick}//for zoom out function
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={clicked?3:1}
        />
        {clicked && <Zoom in={true}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>}

      </form>
    </div>
  );
}

export default CreateArea;