import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LoginPage = () => {
  const [emailId, setEmailId] = useState('')
  // const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      navigate('/')
    }
  }, [navigate])

  const onChangeEmailId = event => setEmailId(event.target.value)

  // const onChangePassword = event => setPassword(event.target.value)

  const onLoginButton = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!pattern.test(emailId)) {
      setErrorMessage('Please Enter Email')
    } else {
      // Assuming loginUserDict is defined somewhere
      Cookies.set('jwt_token', '5', {
        expires: 30,
      })
      navigate('/')
      setEmailId('')
      // setPassword('')
    }
  }

  // Assuming jwtToken is defined somewhere

  // const jwtToken = Cookies.get('jwt_token')

  // if (jwtToken !== undefined) {
  //   navigate('/subject')
  // }

  console.log('Login')
  return (
    <>
      <div className="container">
        <h1>Welcome to TaskList Pro</h1>
        <div className="card">
          <div className="form-group">
            <label htmlFor="email">
              Enter your email address to get started
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@yourcompany.com"
              value={emailId}
              onChange={onChangeEmailId}
            />
            <p className="error-message" id="emailError">
              {errorMessage}
            </p>
          </div>
          <button type="button" onClick={onLoginButton} id="continueWithEmail">
            Continue with Email
          </button>
        </div>
      </div>
    </>
  )
}

export default LoginPage
