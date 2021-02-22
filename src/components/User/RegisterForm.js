import React from 'react'
import {
  setRegisterEmail,
  setRegisterPassword,
  setConfirmRegisterPassword,
} from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import './RegisterForm.css'

const RegisterForm = () => {
  const [
    { registerEmail, registerPassword, confirmRegisterPassword },
    dispatch,
  ] = useDataLayerValue()

  const onSubmit = (e) => {
    e.preventDefault()

    window.location.href = '/profile'
  }

  return (
    <>
      <div className="register">
        <h2 className="register__title">Register Form</h2>
        <form className="register__form" onSubmit={(e) => onSubmit(e)}>
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            id="register-email"
            onChange={(event) => setRegisterEmail(event.target.value, dispatch)}
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(event) =>
              setRegisterPassword(event.target.value, dispatch)
            }
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmRegisterPassword}
            onChange={(event) =>
              setConfirmRegisterPassword(event.target.value, dispatch)
            }
          />
          <button className="btn" action="submit">
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
