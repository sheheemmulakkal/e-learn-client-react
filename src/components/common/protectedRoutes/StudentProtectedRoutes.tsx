import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Navigate } from 'react-router-dom'

interface StudentProtectedRoutesProps {
element: React.ReactNode
}

const StudentProtectedRoutes: React.FC<StudentProtectedRoutesProps> = ({element}) => {
    const student = useSelector((store: RootState) => store.student.student)
    if(!student) {
        return <Navigate to="/login" />
    }
return element;
}

export default StudentProtectedRoutes