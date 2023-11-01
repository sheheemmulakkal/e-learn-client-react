import { Route, Routes } from "react-router-dom";
import './App.css'
import StudentRoute from "./routes/StudentRoute";


function App() {

  return (
    <>
    <Routes >
      <Route path="/*" element={<StudentRoute/>}/>    
    </Routes>
    </>
  )
}

export default App
