import React, { useState } from 'react'
import { setLoginEmail, setUserToken } from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import { Checkbox } from '@material-ui/core'
import { loginUser } from '../../api/User'
import './LoginForm.css'

const LoginForm = () => {
  const [{ loginEmail, loginToken }, dispatch] = useDataLayerValue()
  const [errors, setErrors] = useState([])
  const [loginPassword, setLoginPassword] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await loginUser(loginEmail, loginPassword)

    console.log(response)
    /** Checking if response have errors */
    if (response.errors) {
      let errors = {}
      response.errors.map((error) => {
        errors[error.param] = error.msg
      })
      setErrors(errors)
    } else if (response.token) {
      setErrors([])
      console.log(response.token)
      setUserToken(response.token, dispatch)
    }
  }

  return (
    <>
      <div className="login">
        <h2 className="login__title">Login Form</h2>
        <form className="login__form" onSubmit={(e) => onSubmit(e)}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            id="login-email"
            onChange={(event) => setLoginEmail(event.target.value, dispatch)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          <div className="login__keep_logged">
            <Checkbox name="keep-logged"></Checkbox>
            <label htmlFor="keep-logged">Keep me logged in</label>
          </div>
          <button className="btn" action="submit">
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default LoginForm
