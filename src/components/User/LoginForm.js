import React from 'react'
import { setLoginEmail, setLoginPassword } from '../../actions'
import { useDataLayerValue } from '../../DataLayer.js'
import { Checkbox } from '@material-ui/core'
import { loginUser } from '../../api/User'
import './LoginForm.css'

const LoginForm = () => {
  const [{ loginEmail, loginPassword }, dispatch] = useDataLayerValue()

  const onSubmit = async (e) => {
    e.preventDefault()

    console.log('huj')
    const response = await loginUser(loginEmail, loginPassword)

    console.log(response)

    // /** Checking if response have errors */
    // if (response.errors) {
    //   let errors = {}
    //   response.errors.map((error) => {
    //     errors[error.param] = error.msg
    //   })
    //   setErrors(errors)
    // } else {
    //   setErrors([])
    //   loginUser(registerEmail)
    // }
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
            onChange={(event) => setLoginPassword(event.target.value, dispatch)}
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
