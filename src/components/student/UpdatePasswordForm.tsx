import { useState } from "react";
import { changePassword } from "../../api/studentApi";
import { passwordChangeValidation } from "../../validations/passwordChange";
import { useNavigate } from "react-router-dom";

const UpdatePasswordForm = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmpassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErr("");
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setErr("");
    event.preventDefault();
    const result = passwordChangeValidation(formData);
    if (result.success) {
      try {
        const response = await changePassword(
          result.credential!.newPassword,
          result.credential!.currentPassword
        );
        if (response) {
          setSuccess("Password updated successfully");
          setTimeout(() => {
            navigate("/profile");
          }, 1000);
        }
      } catch (error) {
        if (typeof error === "string") {
          setErr(error);
        } else {
          setErr("An unexpected error occurred.");
        }
      }
    } else {
      setErr(result.message!);
    }
  };

  return (
    <div className="max-w-4/5 w-full flex justify-center py-2 md:py-5">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-4/5 md:w-3/5"
      >
        <input
          type="text"
          name="currentPassword"
          id=""
          value={formData.currentPassword}
          placeholder="Current password"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />

        <p className="italic text-xs text-slate-500 pt-3">
          Password should contain 4 to 10 characters with letters and numbers
        </p>
        <input
          type="password"
          name="newPassword"
          id=""
          value={formData.newPassword}
          placeholder="New Password"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />

        <input
          type="password"
          name="confirmpassword"
          id=""
          value={formData.confirmpassword}
          placeholder="Confirm password"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />

        {err && (
          <p className="my-2 rounded-md border-2 border-red-950 bg-red-400 text-red-950 font-semibold px-3 pt-1">
            {err}
          </p>
        )}
        {success && (
          <p className="my-2 rounded-md border-2 border-green-950 bg-green-400 text-green-950 font-semibold px-3 pt-1">
            {success}
          </p>
        )}
        <button
          type="submit"
          className="bg-sky-800 text-white h-8 rounded-md shadow-md my-2 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
