import { Route, Routes } from "react-router-dom";
import './App.css'
import StudentRoute from "./routes/StudentRoute";
import InstructorRoute from "./routes/InstructorRoute";
import AdminRoute from "./routes/AdminRoute";



function App() {

  return (
    <>
    <Routes >
      <Route path="/instructor/*" element={<InstructorRoute/>}/>   
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="/*" element={<StudentRoute/>}/>    
    </Routes>
    </>
  )
}

export default App
