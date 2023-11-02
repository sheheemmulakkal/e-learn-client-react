import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Navigate } from 'react-router-dom'

interface InstructorProtectedRoutesProps {
element: React.ReactNode
}

const InstructorProtectedRoutes: React.FC<InstructorProtectedRoutesProps> = ({element}) => {
    const instructor = useSelector((store: RootState) => store.instructor.instructor)
    if(!instructor) {
        return <Navigate to="/instructor/login" />
    }
return element;
}

export default InstructorProtectedRoutes