// AddModulePopup.tsx
import React, { FormEvent, useState } from "react";
import ReactDOM from "react-dom";
import "../instructor/AddModulePopup.css";
interface EditProfilePopupProps {
  onClose: () => void;
  onSubmit: (moduleData: ModuleFormData) => Promise<{ success: boolean }>;
}

interface ModuleFormData {
  firstname: string;
  lastname: string;
}

const EditProfileModal: React.FC<EditProfilePopupProps> = ({
  onClose,
  onSubmit,
}) => {
  const [firstname, setModuleName] = useState<string>("");
  const [lastname, setModuleDescription] = useState<string>("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (firstname.trim() === "") {
      setErr("Firstname should not be empty");
      return;
    }
    if (lastname.trim() === "") {
      setErr("Lastname should not be empty");
      return;
    }

    const response = await onSubmit({
      firstname,
      lastname,
    });
    if (response.success) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay relative ">
      <div className="modal-content absolute bg-slate-300 text-right">
        <button className="pb-4 font-semibold text-red-700" onClick={onClose}>
          Close
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="placeholder:italic px-3 my-2 rounded-sm"
            placeholder="First name"
            type="text"
            value={firstname}
            onChange={(e) => setModuleName(e.target.value)}
          />

          <input
            className="placeholder:italic px-3 my-2 rounded-sm"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setModuleDescription(e.target.value)}
          />
          {err && <p className="text-red-700 italic text-left">*{err}</p>}
          <button
            className="bg-blue-700 text-white mt-2 rounded-sm"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default EditProfileModal;
