import React from 'react'
import { NavLink } from 'react-router-dom'
import loginpic from '../Images/loginpic.jpg'

const Login = () => {
  return (
    <>
      <>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-image">
                <figure>
                  <img src={loginpic} alt="registration pic"></img>
                </figure>

                <NavLink to="/signup" className="signup-image-link">
                  Create an Account
                </NavLink>
              </div>

              <div className="signup-form">
                <h2 className="form-title">Login</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log In"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default Login
