import React, { useContext } from 'react';
import { Trash, Edit } from 'lucide-react';
import noteContext from '../context/notes/noteContext';

const NotesItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNotes } = context;
  const { notes, updateNote } = props; // ✅ updateNote props accept kiya gaya hai

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

      <div className="flex items-start justify-between mb-2">
        <h2 className="text-2xl font-bold text-orange-500">{notes.title}</h2>
        <div className="flex gap-2 mt-2">
          <button className="text-orange-500 hover:text-orange-800" onClick={() => {
            deleteNotes(notes._id);
            props.showAlert("Your Note was Deleted", "warning");
          }}
          >
            <Trash size={22} />
          </button>
          <button className="text-orange-500 hover:text-orange-800" onClick={() => updateNote(notes)}>
            <Edit size={22} />
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-4 max-h-36 overflow-y-auto pr-1">{notes.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
          #{notes.tag}
        </span>
      </div>

      <p className="text-xs text-gray-500">📅 {notes.date}</p>
    </div>
  );
};

export default NotesItem;
