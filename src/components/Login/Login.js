import React from 'react'
import "./Login.css"
import LoginForm from './LoginForm/LoginForm'
import SignUp from '../SignUp/SignUp'
import Booking from '../../Pages/Booking/Booking'

const Login = () => {
  return (
    <div className='LoginSection'>
      <div className='loginFormSection'>
        <LoginForm></LoginForm>
      </div>
      <div className="signUp">
        <SignUp></SignUp>
      </div>
    </div>
  )
}

export default Login