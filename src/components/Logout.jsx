import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  // using promises

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/api/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((resp) => {
        navigate('/login', { replace: true })

        if (!resp.status === 200) {
          const error = new Error('Internal Server Error')
          throw error
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return <div>Logout Page</div>
}

export default Logout
