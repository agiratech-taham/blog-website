import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Style from "./Login.module.css";
const Login = () => {
  const [user, setUser] = useState({});

  const handleCallBack = (res) => {
    console.log("res", jwt_decode(res.credential));
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("login_div").hidden = true;
  };
  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("login_div").hidden = false;
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
      size: "small",
    });
  }, []);
  return (
    <div>
      <div id="login_div" className={Style.login}></div>
      {Object.keys(user).length != 0 && (
        <div>
            {user && (
              <div 
              className={Style.signBox}
              >
                <img className={Style.picture} src={user.picture} alt=""></img>
                &nbsp;
                {/* <h5>{user.name}</h5> */}
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
              </div>
            )}
        </div>
         
      )}
    </div>
  );
};
export default Login;