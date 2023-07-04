import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import "./login.scss";

function Login() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  const URL = "http://localhost:3000/login";

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          alert("Wrong Username/Password")
        } else {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Need to doublecheck username/password");
      });
  };

  return (
    <div className="flex justify-center items-center bg-amber-300 border border-solid border-white rounded-xl w-80 h-96">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between h-60 rounded-full">
        <p className="border border-dashed border-black w-48 text-center text-3xl">ME WANT FOOD</p>
        <input
          ref={usernameRef}
          className="h-10 bg-slate-200 border border-solid border-black"
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          ref={passwordRef}
          className="h-10 bg-slate-200 border border-solid border-black"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button>Login</button>
        <a className="self-center" href="/signup">Sign Up</a>
      </form>
    </div>
  );
}

export default Login;
