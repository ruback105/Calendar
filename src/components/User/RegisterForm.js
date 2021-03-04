import React, { useState } from 'react'
import { setLoginEmail, setUserToken } from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import { loginUser, registerUser } from '../../api/User'

import './RegisterForm.css'

const RegisterForm = () => {
  const [errors, setErrors] = useState([])
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState('')
  const [{ loginEmail, loginToken }, dispatch] = useDataLayerValue()

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
        setLoginEmail(registerEmail, dispatch)
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
