import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import Style from "./GoogleLoginComp.module.css";
import { useAuth } from "../auth";

export const GoogleLoginComp = () => {
  const [user, setUser] = useState({});
  const {login,logout}= useAuth()
  const navigate = useNavigate()

  const handleCallBack = (res) => {
    // console.log("res", (res.credential));
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUser(userObject);
    login(userObject);
    navigate('/',{replace:true})
    document.getElementById("login_div").hidden = true;
  };
  const handleSignOut = (event) => {
    logout()
    navigate('')
  };

  useEffect(() => {
    const google = window.google;
    console.log("google", google);
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "155634537024-p4qmta3ap53ttvd97c8eql0llt9j4dt7.apps.googleusercontent.com",
      callback: handleCallBack,
    });
    google.accounts.id.renderButton(document.getElementById("login_div"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div>
      <div id="login_div" className={Style.login}></div>
      {Object.keys(user).length != 0 && (
        <div>
              <div 
              className={Style.signBox}
              >
                <img className={Style.picture} src={user?.picture} alt=""></img>
                &nbsp;
                {/* <h5>{user.name}</h5> */}
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
              </div>
        </div>
         
      )}
    </div>
  );
};