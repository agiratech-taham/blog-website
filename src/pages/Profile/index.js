import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/auth'
import Container from 'react-bootstrap/Container';

export const Authentication = () => {
    const {logout, auth} = useAuth()
    const navigate = useNavigate()


    const handleLogout = () => {
        logout()
        navigate('')
    }
  return (
    <div>
      <h1>Welcome {auth?.name}</h1>
      <img style={{height:"200px", width:"200px",marginTop:"2rem"}} src={auth?.picture} alt="user" />
    <div>
    <button style={{background:"gray", padding:".5rem", borderRadius:"10%"}} onClick={handleLogout}>Logout</button>
    </div>
    </div>
  )
}
