import { useState } from "react"
import { instructorLogin, InstructorResendOtp } from "../../api/authenticationApi";
import { instructorActions } from "../../redux/InstructorSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../../validations/loginSchema";

const InstructorLoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [err, setErr] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErr("")
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = async (event: React.FormEvent) => {
        setErr("")
        event.preventDefault();

        const result = loginValidation(formData)
        if( !result.success ) {
          setErr(result.message!)
        }
        try {
            dispatch(instructorActions.setEmail(result.credential!.email))
          const response = await instructorLogin(result.credential!);
          if( response) {
            dispatch(instructorActions.saveInstructor(response))
            navigate('/instructor')
          }
          
        } catch (error) {
          if (typeof error === "string") {
            if(error === "Not verified"){
                await InstructorResendOtp(formData.email);
                navigate("/instructor/verify-otp")
            } else {
                setErr(error); 
            }
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
          type="email"
          name="email"
          id=""
          value={formData.email}
          placeholder="Email"
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
        
        {err && (
          <p className="my-2 h-8 rounded-md border-2 border-red-950 bg-red-400 text-red-950 font-semibold px-3 pt-1">
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
  )
}

export default InstructorLoginForm