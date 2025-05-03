import NoteContext from "./noteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

   // Get all notes a note
   const getNotes = async() => {
    // Api calling
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
     method: 'GET',
     headers: {
       'Content-type': 'application/json',
       'auth-token': localStorage.getItem("token")
     } 
   });
   const json = await response.json()
   setNotes(json)
 }


  // Add a note
  const addNotes = async(title, description, tag) => {
     // Api calling
     const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({title,description,tag}) 
    });
    const note = await response.json();  // ✅ fixed parentheses
    setNotes([...notes, note]); 
  }



  // Delete a note
  const deleteNotes = async(id) => {
    // Api calling
    await fetch(`${host}/api/notes/deletenotes/${id}`, {  // ✅ removed unused variable
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
    });
    // Logic for delete notes in clientside
    const newNotes = notes.filter((notes) => { return notes._id !== id })
    setNotes(newNotes)
  }


  // Edit a note
  const editNotes = async (id, title, description, tag) => {
    // Api calling
    await fetch(`${host}/api/notes/updatenotes/${id}`, {  // ✅ removed unused variable
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
      body: JSON.stringify({title,description,tag}) 
    });

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logig to edit notes in client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes)
  }


  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
