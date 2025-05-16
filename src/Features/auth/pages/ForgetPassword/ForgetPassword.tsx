import React from 'react'
import ForgetPasswordForm from '../../components/ForgetPasswordForm'
import { Link } from 'react-router-dom'

const ForgetPassword: React.FC = () => {
  return (
    <div className="w-full max-w-[400px]">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <div className="mt-4">
          <h2 className="mb-4 text-3xl text-center font-semibold text-gray-800">Reset Password</h2>
          <ForgetPasswordForm />
        </div>
        <div className="my-2 text-center">
          Need an account? <Link  to="/sign-up" className="underline ms-1">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword