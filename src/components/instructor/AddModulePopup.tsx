// AddModulePopup.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./AddModulePopup.css";
interface AddModulePopupProps {
  onClose: () => void;
  onSubmit: (moduleData: ModuleFormData) => Promise<{ success: boolean }>;
}

interface ModuleFormData {
  moduleName: string;
  moduleDescription: string;
  videoFile: File | null;
}

const AddModulePopup: React.FC<AddModulePopupProps> = ({
  onClose,
  onSubmit,
}) => {
  const [moduleName, setModuleName] = useState<string>("");
  const [moduleDescription, setModuleDescription] = useState<string>("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [err, setErr] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErr("");
    const file = e.target.files && e.target.files[0];
    setVideoFile(file || null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!videoFile) {
      setErr("No video selected");
    }
    const response = await onSubmit({
      moduleName,
      moduleDescription,
      videoFile,
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
            placeholder="Name"
            type="text"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />

          <input
            className="placeholder:italic px-3 my-2 rounded-sm"
            placeholder="Description"
            value={moduleDescription}
            onChange={(e) => setModuleDescription(e.target.value)}
          />

          <input
            type="file"
            className="bg-gray-300"
            accept="video/*"
            onChange={handleFileChange}
          />
          {err && <p className="text-red-700 italic text-left">*{err}</p>}
          <button
            className="bg-blue-700 text-white mt-2 rounded-sm"
            type="submit"
          >
            Add Module
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default AddModulePopup;
