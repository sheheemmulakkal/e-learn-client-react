import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { Navigate } from 'react-router-dom'

interface AdminProtectedRoutesProps {
element: React.ReactNode
}

const AdminProtectedRoutes: React.FC<AdminProtectedRoutesProps> = ({element}) => {
    const admin = useSelector((store: RootState) => store.admin.admin)
    if(!admin) {
        return <Navigate to="/admin/login" />
    }
return element;
}

export default AdminProtectedRoutes