import { Routes, Route } from 'react-router-dom'
import AuthProtected  from '../components/common/protectedRoutes/AuthPotected'
import AdminProtectedRoutes from '../components/common/protectedRoutes/AdminProtected'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminDashboard from '../pages/admin/AdminDashboard'
import StudentsList from '../pages/admin/StudentsList'
import InstructorsList from '../pages/admin/InstructorsList'

function AdminRoute() {
  return (
    <Routes>
        <Route path='/login' element={<AuthProtected element={<AdminLogin />} />} />
        <Route path='/students-list' element={<AdminProtectedRoutes element={<StudentsList/>} /> } />
        <Route path='/instructor-list' element={<AdminProtectedRoutes element={<InstructorsList/>} /> } />
        <Route path='/' element={<AdminProtectedRoutes element={<AdminDashboard />} />} />
    </Routes>
  )
}

export default AdminRoute