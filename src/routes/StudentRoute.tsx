    import React from 'react'
    import { Routes, Route } from 'react-router-dom'
    import { RootState } from '../redux/store'
    import StudentHome from '../pages/student/StudentHome'
    import StudentSignup from '../pages/student/StudentSignup'
    import VerifyOtp from '../pages/student/VerifyOtp'
    import { useSelector } from 'react-redux'

    function StudentRoute() {
        const student = useSelector((store: RootState) => store.student.student )
    return (
        <Routes>
            <Route path="/signup" element = {student?<StudentHome/>:<StudentSignup/>} />
            <Route path="/verify-otp" element = {student?<StudentHome/>:<VerifyOtp/>} />
            <Route path="/" element = {<StudentHome/>} />
        </Routes>
    )
    }

    export default StudentRoute