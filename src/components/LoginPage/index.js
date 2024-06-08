import React, {useState, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  let uuidFenteator
  const navigate = useNavigate()
  const [codeInputs, setCodeInputs] = useState(
    Array.from({length: 6}, () => ''),
  )
  const inputRefs = useRef(Array.from({length: 6}, () => React.createRef()))

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      navigate('/')
    }
  }, [navigate])

  const handleInputChange = (index, value) => {
    const newInputs = [...codeInputs]
    newInputs[index] = value
    setCodeInputs(newInputs)
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].current.focus()
      uuidFenteator = uuidv4() + index
    }
  }

  const handleBackspace = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && codeInputs[index] === '') {
      inputRefs.current[index - 1].current.focus()
    }
  }

  const onLoginButton = () => {
    const enteredCode = codeInputs.join('')
    if (enteredCode === '988588') {
      Cookies.set('jwt_token', '988588', {expires: 30})
      navigate('/')
      setErrorMessage('')
      setCodeInputs(Array.from({length: 6}, () => ''))
    } else {
      setErrorMessage('Please Enter Correct Code')
    }
  }

  return (
    <div className="login-container">
      <h1>Welcome to TaskList Pro</h1>
      <div className="card">
        <form className="form-group">
          <label className="login-lable-styles" htmlFor="codeid">
            Enter your Code to get started
          </label>
          <div className="code-input-container">
            {codeInputs.map((value, index) => (
              <input
                key={uuidFenteator}
                ref={inputRefs.current[index]}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                className="code-input"
                value={value}
                onChange={e => handleInputChange(index, e.target.value)}
                onKeyDown={e => handleBackspace(index, e)}
              />
            ))}
          </div>
          <p className="error-message" id="emailError">
            {errorMessage}
          </p>
        </form>
        <button onClick={onLoginButton} type="button" id="continueWithEmail">
          Submit
        </button>
      </div>
    </div>
  )
}

export default LoginPage
