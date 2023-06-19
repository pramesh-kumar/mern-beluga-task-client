import React, { useState } from 'react'
import signup from '../Images/registration.jpg'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  })

  const handleInputs = (e) => {
    let name = e.target.name
    let value = e.target.value

    // setUser({ ...user, [name]: value })

    // or

    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const postData = async (e) => {
    e.preventDefault()

    // const { name, email, phone, work, password, cpassword } = user

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   name,
        //   email,
        //   phone,
        //   work,
        //   password,
        //   cpassword,
        // }),
        body: JSON.stringify(user),
      })

      if (res.status === 422) {
        alert('Invalid Registration')
        console.log('Invalid Registration')
      } else {
        alert('Successfull registration')
        navigate('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>

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
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    id="work"
                    name="work"
                    placeholder="Enter your profession"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
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
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={postData}
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signup} alt="registration pic"></img>
              </figure>

              <NavLink to="/login" className="signup-image-link">
                I am already Register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
