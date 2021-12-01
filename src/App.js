import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import API from "./utils/API";
import SignupForm from "./SignupForm";
import Profile from "./Profile";
const axios = require("axios");



function App() {
  const [userState, setUserState] = useState({
    username: "",
    id: 0
  });
  const [token, setToken] = useState("");
  //loginform
  const [loginFormState, setLoginFormState] = useState({
    username: "",
    password: ""
  })
  //signup form
  const [signupFormState, setSignupFormState] = useState({
    username: "",
    password: ""
  })

  // highscore in state
  const [highscore, setHighscore] = useState({
    highscore: 0
  });

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    console.log("use effected")
    if (myToken) {
      API.getProfile(myToken).then(res => {
        console.log("workded")
        console.log(res)
        setToken(myToken)
        setUserState({
          username: res.data.username,
          id: res.data.id
        })
      }).catch(err => {
        console.log("failed")
        console.log(err)
        localStorage.removeItem("token")
      })
    }
  }, [])

  const handleLoginChange = event => {
    if (event.target.name === "username") {
      setLoginFormState({
        ...loginFormState,
        username: event.target.value
      })
    } else {
      setLoginFormState({
        ...loginFormState,
        password: event.target.value
      })
    }
  }

  const handleSignupChange = event => {
    if (event.target.name === "username") {
      setSignupFormState({
        ...signupFormState,
        username: event.target.value
      })
    } else {
      setSignupFormState({
        ...signupFormState,
        password: event.target.value
      })
    }
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    API.login(loginFormState).then(res => {
      console.log(res.data)
      setUserState({
        username: res.data.user,
        id: res.data.id
      })
      console.log(res.data.user)
      console.log(res.data.id)
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
    }).catch(err => {
      console.log(err);
    })
    console.log(userState);
  }

  const handleSignupSubmit = e => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(loginFormState).then(res => {
        console.log(res.data)
        setUserState({
          username: res.data.user,
          id: res.data.id
        })
        console.log(res.data.user)
        console.log(res.data.id)
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
      }).catch(err => {
        console.log(err);
      })
      console.log(userState);
    })
  }


  const logMeOut = () => {
    setUserState({
      email: "",
      id: 0
    });
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <>
      {!userState.username ? (
        <div>
          <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} />
          <SignupForm submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />
        </div>
      ) : (
        <div>
          <h1>Welcome, {userState.username} !!</h1>
          <button onClick={logMeOut} >Logout</button>
          <Profile highscore={setHighscore}/>
        </div>
      )}

    </>
  );
}

export default App;
