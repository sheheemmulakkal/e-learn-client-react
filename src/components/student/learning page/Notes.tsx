import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addNotes, removeNote } from "../../../api/studentApi";
import { useDispatch, useSelector } from "react-redux";
import { selectCourseActions } from "../../../redux/selectedCourseSlice";
import { RootState } from "../../../redux/store";

interface NoteComponentProps {
  courseId?: string;
  studentId?: string;
  notes?: string[];
}

const Notes: React.FC<NoteComponentProps> = ({ courseId }) => {
  const notes = useSelector(
    (state: RootState) => state.selecedCourse.course?.notes
  );

  const [newNote, setNewNote] = useState<string>("");
  const dispatch = useDispatch();
  const handleAddNote = async () => {
    if (courseId && newNote.trim() !== "") {
      const response = await addNotes({ enrolledId: courseId, notes: newNote });
      if (response) {
        dispatch(selectCourseActions.addNote(newNote));
      }
    }
    setNewNote("");
  };

  const deleteNode = async (note: string) => {
    try {
      const response = await removeNote(courseId!, note);
      if (response) {
        dispatch(selectCourseActions.removeNote(note));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [notes]);

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
        <button
          className=" bg-black text-white px-4 py-2 my-4"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
      <div className="p-5 border">
        <h2 className="font-bold text-xl">Notes</h2>
        <ul>
          {notes!.map((note, index) => (
            <React.Fragment key={index}>
              <div className="w-full flex flex-row justify-between">
                <div>
                  <li
                    className="py-2"
                    dangerouslySetInnerHTML={{ __html: note }}
                  />
                </div>
                <div>
                  <i
                    className="fa-solid fa-trash text-blue-800 cursor-pointer"
                    onClick={() => deleteNode(note)}
                  ></i>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
