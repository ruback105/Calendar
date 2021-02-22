import React from 'react'
import { useDataLayerValue } from '../../../DataLayer.js'
import { setLoginActive } from '../../../actions'
import { LoginForm, RegisterForm } from '../../../components'
import './Login.css'

const Login = () => {
  const [{ loginActive }, dispatch] = useDataLayerValue()

  const onSubmit = (e) => {
    e.preventDefault()

    window.location.href = '/profile'
  }

  return (
    <section className="container login">
      <div className="login__wrapper">
        <div className="section-title">
          <h1
            className={loginActive ? 'login active' : 'login'}
            onClick={() => setLoginActive(true, dispatch)}
          >
            Login
          </h1>
          <h1
            className={!loginActive ? 'register active' : 'register'}
            onClick={() => setLoginActive(false, dispatch)}
          >
            Register
          </h1>
        </div>
        <div className="login-register wrapper">
          {loginActive ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </section>
  )
}

export default Login
