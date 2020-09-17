import React, { useContext, useState } from "react";
import "./Login.css";
import fbIcon from "../../img/Icon/fb.png"
import googleIcon from "../../img/Icon/google.png"
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GoogleButton from "react-google-button";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = (e) => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((response) => {
        const {displayName,email} = response.user;
        const signedInUser = {name: displayName, email: email};
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(response)
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    e.preventDefault();
  };
  const handleFacebookSignIn=(e)=>{
    firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(result)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    e.preventDefault();
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((response) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          history.replace(from);
        })
        .catch(function (error) {
          var errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(errorMessage);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((response) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          const {displayName,email} = response.user;
          const signedInUser = {name: displayName, email: email};
          setLoggedInUser(signedInUser);
          console.log(response.user)
          history.replace(from);
          
        })
        .catch(function (error) {
          var errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
      })
      .then(function () {
       console.log("user name updated successfully")
      })
      .catch(function (error) {
        console.log(error)
      });
  };

  return (
    <div className="card card-container signup-card" style={{ width: "32rem" }}>
      <h2 className="text-dark ">{newUser ? "Create an account" : "Log in"}</h2>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Name"
              onBlur={handleBlur}
              required
            />
          </div>
        )}

        <div class="form-group">
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            onBlur={handleBlur}
            required
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onBlur={handleBlur}
            required
          />
        </div>

        <button type="submit" class="btn btn-warning btn-block">
          {newUser ? "Sign Up" : "Sign in"}
        </button>
        <small className="text-danger d-block text-center">{user.error}</small>
        {user.success && (
          <small className="text-success d-block text-center">
            User {newUser ? "created" : "logged in"} successfully
          </small>
        )}
      </form>
      <p className="text-dark d-block text-center">
        {newUser?"already have an account?" : "don't have an account?"}
        <span
          className="text-warning"
          style={{ cursor: "pointer" }}
          onClick={() => setNewUser(!newUser)}
        >
          <u>{newUser ?"Log in" : "Create an account"}</u>
        </span>{" "}
      </p>

      <p className="text-center text-bold text-dark pt-2">or</p>
      <button className="btn btn-block btn-dark" onClick={handleFacebookSignIn}> <img src={fbIcon} style={{width:"30px"}} alt=""/> continue with facebook</button>
      <button className="btn btn-block btn-dark" onClick={handleGoogleSignIn}><img src={googleIcon} style={{width:"25px"}} alt=""/>
          continue with Google
      </button>
    </div>
  );
};

export default Login;
