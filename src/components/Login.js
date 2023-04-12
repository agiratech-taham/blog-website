import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import { GoogleLoginComp } from './GoogleLoginComp'

import "./Login.css"
export const Login = () => {
    const [user, setUser] = useState("")
    const {login} = useAuth();
    const navigate = useNavigate()


    const handleLogin = () => {
        login({
            name: user,
            picture: "https://lh3.googleusercontent.com/a/AGNmyxYqljnbACbrkP6KRSJW4E6vI9yuXpsbO0FItba8=s96-c",
            email:"taha.murtaza@agiratech.com",
            token:"eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjZGEzNjBmYjM2Y2QxNWZmODNhZjgzZTE3M2Y0N2ZmYzM2ZDExMWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODEyNzc3NTIsImF1ZCI6IjE1NTYzNDUzNzAyNC1wNHFtdGEzYXA1M3R0dmQ5N2M4ZXFsMGxsdDlqNGR0Ny5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTAyODA2MTg4MDgwMjU3NjgyOCIsImhkIjoiYWdpcmF0ZWNoLmNvbSIsImVtYWlsIjoidGFoYS5tdXJ0YXphQGFnaXJhdGVjaC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMTU1NjM0NTM3MDI0LXA0cW10YTNhcDUzdHR2ZDk3YzhlcWwwbGx0OWo0ZHQ3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IlRhaGEgTXVydGF6YSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhZcWxqbmJBQ2Jya1A2S1JTSlc0RTZ2STl5dVhwc2JPMEZJdGJhOD1zOTYtYyIsImdpdmVuX25hbWUiOiJUYWhhIiwiZmFtaWx5X25hbWUiOiJNdXJ0YXphIiwiaWF0IjoxNjgxMjc4MDUyLCJleHAiOjE2ODEyODE2NTIsImp0aSI6IjRiOWY2ZDgwYTY5MjEzZDU3ZjNkZTM0Y2E4ZjQxZTFjZDRlN2IwNzIifQ.NxnhV0Ttx8U9ETt8p0PsVBBFbfvoRWFaGvS71eKnLJE0MrEw3IBriH-pdHN39NRumokKHq3Pha5IqzavvlFj7Kj_3xQs_Ql5j36KRD-M16bsVA6y0Se_F6MogCvr3LBdwfDYyVUAZTK7Y7dflLGDBMfvXPyCr101afcVLbLS9Yb5ZabON72QXlOVHj_60hg7L20WfMLX4ZrSuOoDhbeBloSZlwFaM3ou48m8b59P3wD0guK6Pw1MReczMpB7kvBBh6UQGealYBIM1kY6j1FGV33-rqSyj4lAXbPRRXe6f7RL5nPxPq26litqrpndJhxltfb6qymCmeR7pyH_wpRTZA"
        })
        navigate('/',{replace:true})
    }
  return (
    <div>
        <div className="login-form">
         {/* <input placeholder="&nbsp;Enter Your Name" type="text" onChange={(e)=> setUser(e.target.value)}/>
       <button style={{background:"#0096FF", borderRadius:"5%",padding:"5px 10px"}} onClick={handleLogin}>Login</button>
       <div style={{display:"flex",justifyContent:"center"}}>or</div> */}
        <GoogleLoginComp/>
   </div>
    </div>
  )
}
