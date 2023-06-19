import React, { useState, useEffect } from 'react'

const Home = () => {
  const [userName, setUserName] = useState('')
  const [show, setshow] = useState(false)

  const callHomePage = async () => {
    try {
      const res = await fetch('/api/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      setUserName(data.name)
      if (data.name !== undefined) {
        setshow(true)
      }

      console.log(userName)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    callHomePage()
  }, [])
  return (
    <>
      <div className="home_page home_bg row">
        <div className="home-div">
          <p className="pt-5">Welcome</p>
          <h2>{userName}</h2>
          <h1>
            {show ? 'Happy, to see you back.' : 'We are MERN Developer !'}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
