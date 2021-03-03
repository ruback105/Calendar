import React, { useState } from 'react'
import {
  setRegisterEmail,
  setRegisterPassword,
  setConfirmRegisterPassword,
} from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import { loginUser, registerUser } from '../../api/User'
import './RegisterForm.css'

const RegisterForm = () => {
  const [
    { registerEmail, registerPassword, confirmRegisterPassword },
    dispatch,
  ] = useDataLayerValue()
  const [errors, setErrors] = useState([])

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await registerUser(
      registerEmail,
      registerPassword,
      confirmRegisterPassword,
    ).then((resp) => resp.json())

    /** Checking if response have errors */
    if (response.errors) {
      let errors = {}
      response.errors.map((error) => {
        errors[error.param] = error.msg
      })
      setErrors(errors)
    } else {
      setErrors([])
      loginUser(registerEmail)
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
              onChange={(event) =>
                setRegisterEmail(event.target.value, dispatch)
              }
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
              onChange={(event) =>
                setRegisterPassword(event.target.value, dispatch)
              }
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
                setConfirmRegisterPassword(event.target.value, dispatch)
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
