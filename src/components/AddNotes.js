import React, { useState, useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Your Note was Added SuccessFully", "success");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black/60 to-black/10 p-8 ">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg my-3 hover:scale-105 transition duration-300">
        <h2 className="text-center text-3xl font-semibold text-orange-400 mb-6">Add New Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={onChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter note title"
              minLength={5}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter note description"
              rows="4"
              minLength={5}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="tag" className="block text-lg font-medium text-gray-700">Tag</label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Enter tag separated by commas"
            />
          </div>

          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-orange-200"
          >
            Add New Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
