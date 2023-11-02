import React from 'react'
import OtpVerificationForm from '../../components/auth/OtpVerificationForm'

const VerifyOtp: React.FC<{isInstructor: boolean}> = (props) => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <OtpVerificationForm isInstructor={props.isInstructor} />
    </div>
  )
}

export default VerifyOtp