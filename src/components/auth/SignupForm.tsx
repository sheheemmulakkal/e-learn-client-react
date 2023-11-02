import React, { useState } from "react";
// import { useDispatch } from 'react-redux'
import { studentSignup } from "../../api/authenticationApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { studentActions } from "../../redux/studentSlice";
import { signupValidation } from "../../validations/singnupSchema";

interface Credentials {
  firstname: string;
  lastname: string;
  email: string;
  mobile: number;
  password: string;
}
const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErr("");
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "mobile" ? (value === "" ? "" : value) : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const credentials: {success: boolean, credential?: Credentials, message?: string} =
      signupValidation(formData);
    if (!credentials.success) {
      setErr(credentials.message!);
      return;
    }
    try {
      const response = await studentSignup(credentials.credential!);
      if (response?.success) {
        dispatch(studentActions.setEmail(response.email));
        navigate("/verify-otp");
      }
    } catch (error) {
      if (typeof error === "string") {
        setErr(error);
      } else {
        setErr("An unexpected error occurred.");
      }
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
          name="firstname"
          id=""
          value={formData.firstname}
          placeholder="First name"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        <input
          type="text"
          name="lastname"
          id=""
          value={formData.lastname}
          placeholder="Last name"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        <input
          type="email"
          name="email"
          id=""
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        <input
          type="number"
          name="mobile"
          id=""
          value={formData.mobile}
          placeholder="mobile"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        <input
          type="password"
          name="confirmpassword"
          id=""
          placeholder="Confirm password"
          onChange={handleInputChange}
          className="my-2 h-8 rounded-md border-0 border-black px-3 py-2 placeholder:italic shadow-md"
        />
        {err && (
          <p className="my-2  rounded-md border-2 border-red-950 bg-red-400 text-red-950 font-semibold px-3 pt-1">
            {err}
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

export default SignupForm;
