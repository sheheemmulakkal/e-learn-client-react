import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Navigate } from 'react-router-dom'

interface AuthProtectedRoutesProps {
    element: React.ReactNode
}

const AuthProtected: React.FC<AuthProtectedRoutesProps> = ({element}) => {
    const student = useSelector((store: RootState) => store.student.student)
    if( student ) {
        return <Navigate to="/" replace />
    }
  return <>{element}</>;
}

export default AuthProtected