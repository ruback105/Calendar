import React, { useState } from 'react'
import { setLoginEmail, setUserToken } from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import { Checkbox } from '@material-ui/core'
import { loginUser } from '../../api/User'
import Cookies from 'universal-cookie'
import './LoginForm.css'

const LoginForm = () => {
  const [{ loginEmail, loginToken }, dispatch] = useDataLayerValue()
  const [errors, setErrors] = useState([])
  const [loginPassword, setLoginPassword] = useState('')
  const cookies = new Cookies()
  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await loginUser(loginEmail, loginPassword)

    /** Checking if response have errors */
    if (response.errors) {
      let errors = {}
      response.errors.map((error) => {
        errors[error.param] = error.msg
      })
      console.log(errors)
      setErrors(errors)
    } else if (response.token) {
      setErrors([])
      cookies.set('userToken', response.token, { path: '/' })
      cookies.set('loginEmail', loginEmail, { path: '/' })
      setUserToken(cookies.get('userToken'), dispatch)
      setLoginEmail(cookies.get('loginEmail'), dispatch)
    }
  }

  return (
    <>
      <div className="login">
        <h2 className="login__title">Login Form</h2>
        <form className="login__form" onSubmit={(e) => onSubmit(e)} noValidate>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              id="login-email"
              onChange={(event) => setLoginEmail(event.target.value, dispatch)}
            />
            {errors && errors.loginEmail && (
              <p className="error-msg">* {errors.loginEmail}</p>
            )}
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
            />
            {errors && errors.loginPassword && (
              <p className="error-msg">* {errors.loginPassword}</p>
            )}
          </div>
          {/* TODO - implement saving token in cookies, so logout doesn't happen */}
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
