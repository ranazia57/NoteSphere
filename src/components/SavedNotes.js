import React, { useContext, useEffect, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NotesItem from './NotesItem';
import { useNavigate } from 'react-router-dom';

const SavedNotes = (props) => {
  let navigate  = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNotes } = context;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({ id: "", title: "", description: "", tag: "" });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/login');
    } else {
      getNotes();
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    setSelectedNote({
      id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setSelectedNote({ ...selectedNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editNotes(selectedNote.id, selectedNote.title, selectedNote.description, selectedNote.tag)
    props.showAlert("Your Note is Updated SuccessFully","success")
    handleModalClose();
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedNote({ id: "", title: "", description: "", tag: "" });
  };

  return (
    <div className="bg-gradient-to-r from-black/60 to-black/10 min-h-screen relative">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-orange-400 font-bold mb-6 text-center">Your Saved Notes</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.length === 0 && 'No notes for display'}
          {notes.map((note) => (
            <NotesItem key={note._id} notes={note} updateNote={updateNote} showAlert={props.showAlert}/>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-orange-300 w-full max-w-md p-6">
            <div className="flex justify-end mb-2">
              <button
                className="text-orange-500 font-bold hover:text-orange-700 text-lg"
                onClick={handleModalClose}
              >
                ✖
              </button>
            </div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">Edit Note</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={selectedNote.title}
                  onChange={handleChange}
                  className="w-full border border-orange-300 rounded px-3 py-2 mt-1 focus:outline-orange-400"
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={selectedNote.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-orange-300 rounded px-3 py-2 mt-1 focus:outline-orange-400"
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tag</label>
                <input
                  type="text"
                  name="tag"
                  value={selectedNote.tag}
                  onChange={handleChange}
                  className="w-full border border-orange-300 rounded px-3 py-2 mt-1 focus:outline-orange-400"
                />
              </div>
              <div className="flex justify-end">
                <button 
                disabled={selectedNote.title.length<5 || selectedNote.description.length<5}
                type="submit" 
                className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-200">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedNotes;
