import React from 'react';
import { useEffect, useState } from 'react';

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };

    useEffect(() => { 
    async function fetchUsers() {
        const response = await fetch('http://localhost:3001/user');
        const users = await response.json();
        localStorage.setItem("users", JSON.stringify(users))
      }
       fetchUsers()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        let { uname, pass } = document.forms[0];
        let loginUsers = JSON.parse(localStorage.getItem("users"))
        const userData = loginUsers.find((user) => user.username === uname.value);
  
        if (userData) {
          const status = {userStatus : false, id : userData.id, username : userData.username, password: userData.password, loggedin: userData.loggedin}
          localStorage.setItem("loggedIn", JSON.stringify(status))
            if (userData.password !== pass.value) {
              setErrorMessages({ name: "pass", message: errors.pass });
            } else {
              setIsSubmitted(true);
              userData.loggedin = !userData.loggedin
              console.log("user",userData);
              fetch("http://localhost:3001/change", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
              })
              .then(res => res.json())
              .then(data => {
                console.log("data",data)
              });
              }
          } else {
            setErrorMessages({ name: "uname", message: errors.uname });
          }
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    return (
        <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div> You have logged in succesfully!</div> : renderForm}
        </div>
      </div>
    );
}

export default Login;