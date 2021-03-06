import React, { useState } from 'react'
import { setLoginEmail, setUserToken } from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import { loginUser, registerUser } from '../../api/User'
import Cookies from 'universal-cookie'
import './RegisterForm.css'

const RegisterForm = () => {
  const [errors, setErrors] = useState([])
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState('')
  const [{}, dispatch] = useDataLayerValue()
  const cookies = new Cookies()

  const onSubmit = async (e) => {
    e.preventDefault()

    let response = await registerUser(
      registerEmail,
      registerPassword,
      confirmRegisterPassword,
    )

    /** Checking if response have errors */
    console.log(response)
    if (response.errors) {
      let errors = {}
      response.errors.map((error) => {
        errors[error.param] = error.msg
      })
      setErrors(errors)
    } else {
      setErrors([])
      response = await loginUser(registerEmail, registerPassword)

      if (response && response.errors) {
        let errors = {}
        response.errors.map((error) => {
          errors[error.param] = error.msg
        })
        setErrors(errors)
      } else if (response.token) {
        setErrors([])
        cookies.set('userToken', response.token, { path: '/' })
        setUserToken(cookies.get('userToken'), dispatch)
        setLoginEmail(registerEmail, dispatch)
        /** TODO - instead of saving email in cookies we can use token,
         * that actually have encrypted emmail and expiration time
         */
        cookies.set('loginEmail', registerEmail, { path: '/' })
        setLoginEmail(cookies.get('loginEmail'), dispatch)
      }
    }
  }

  return (
    <>
      <div className="register">
        <h2 className="register__title">Register Form</h2>
        <form
          className="register__form"
          onSubmit={(e) => onSubmit(e)}
          noValidate
        >
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              id="register-email"
              onChange={(event) => setRegisterEmail(event.target.value)}
            />
            {errors && errors.registerEmail && (
              <p className="error-msg">* {errors.registerEmail}</p>
            )}
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(event) => setRegisterPassword(event.target.value)}
            />
            {errors && errors.registerPassword && (
              <p className="error-msg">* {errors.registerPassword}</p>
            )}
          </div>
          <div className="password-confirm">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmRegisterPassword}
              onChange={(event) =>
                setConfirmRegisterPassword(event.target.value)
              }
            />
            {errors && errors.confirmRegisterPassword && (
              <p className="error-msg">* {errors.confirmRegisterPassword}</p>
            )}
          </div>
          <button className="btn" action="submit">
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
