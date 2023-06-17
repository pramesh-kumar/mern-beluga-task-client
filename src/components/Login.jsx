import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import loginpic from '../Images/loginpic.jpg'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const HandleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser({ ...user, [name]: value })
  }

  const postData = async (event) => {
    event.preventDefault()

    const { email, password } = user

    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      // console.log(res)
      if (res.status === 422) {
        alert('Invalid Input')
      } else {
        alert('Signin Successfull')
        navigate('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

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
                      value={user.email}
                      onChange={HandleInputs}
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
                      value={user.password}
                      onChange={HandleInputs}
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log In"
                      onClick={postData}
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
