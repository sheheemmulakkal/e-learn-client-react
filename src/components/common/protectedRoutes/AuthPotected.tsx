import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Navigate } from 'react-router-dom'

interface AuthProtectedRoutesProps {
    element: React.ReactNode
}

const AuthProtected: React.FC<AuthProtectedRoutesProps> = ({element}) => {
    const student = useSelector((store: RootState) => store.student.student)
    const instructor = useSelector((store: RootState) => store.instructor.instructor)
    const admin = useSelector((store: RootState) => store.admin.admin)
    if( student ) {
        return <Navigate to="/" replace />
    } 
    if( instructor ) {
        return <Navigate to="/instructor" replace />
    }
    if( admin ) {
        return <Navigate to="/admin" replace />
    }
  return <>{element}</>;
}

export default AuthProtected