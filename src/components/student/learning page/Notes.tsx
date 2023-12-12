import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Note {
  _id: string;
  content: string;
}

interface NoteComponentProps {
  courseId?: string;
  studentId?: string;
}

const Notes: React.FC<NoteComponentProps> = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  const handleAddNote = () => {
    // Add a new note locally
    const newNoteObj: Note = {
      _id: String(Date.now()), // Generate a temporary ID (replace with actual logic)
      content: newNote,
    };

    setNotes([...notes, newNoteObj]);

    // Clear the Quill editor
    setNewNote("");
  };

  return (
    <div className="container px-6 md:px-0">
      <div>
        <ReactQuill
          value={newNote}
          onChange={(value) => setNewNote(value)}
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
          }}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="p-5 border">
        <h2 className="font-bold text-xl">Notes</h2>
        <ul>
          {notes.map((note) => (
            <>
              <li
                className="py-2"
                key={note._id}
                dangerouslySetInnerHTML={{ __html: note.content }}
              />
              <hr />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
