import { Routes, Route } from 'react-router-dom'
import  AuthProtected  from '../components/common/protectedRoutes/AuthPotected'
import InstructorProtectedRoutes from '../components/common/protectedRoutes/InstructorProtected'
import VerifyOtp from '../pages/student/VerifyOtp'
import InstructorSignup from '../pages/instructor/InstructorSignup'
import InstructorHome from '../pages/instructor/InstructorHome'
import InstructorLogin from '../pages/instructor/InstructorLogin'

const InstructorRoute = () => {
  return (
    <Routes>
        <Route path="/signup" element={<AuthProtected element={<InstructorSignup />} />} />
        <Route path='/verify-otp' element={<AuthProtected element={<VerifyOtp isInstructor={true} />}/>} />
        <Route path="/login" element={<AuthProtected element={<InstructorLogin />} />} />
        <Route path='/' element={<InstructorProtectedRoutes element={<InstructorHome />} />} />
    </Routes>
  )
}

export default InstructorRoute