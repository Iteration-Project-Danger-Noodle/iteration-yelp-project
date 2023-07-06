import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup({setUser}) {
  const navigate = useNavigate();
  const firstName = useRef('');
  const lastName = useRef('');
  const username = useRef('');
  const password = useRef('');
  const zipcode = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName.current,
        last_name: lastName.current,
        username: username.current,
        password: password.current,
        zipcode: zipcode.current,
      }),
    })
    if (res.ok) {
      const user = await res.json();
      setUser(user);
      navigate(-1);
    }
  };

  return (
    <div className="fixed flex justify-center items-center top-0 h-screen w-screen bg-opacity-50 bg-slate-950">
      <div className="flex justify-center items-center bg-black bg-opacity-60 border border-solid border-white rounded-xl w-auto h-auto p-8">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between items-center h-auto rounded-full">
          <p className="w-30 text-right font-black text-4xl text-white">SIGN UP</p>
          <label htmlFor="signup-firstname" className="h-0 w-0 text-transparent">firstname</label>
          <input
            ref={firstName}
            id="signup-firstname"
            onChange={(e) => firstName.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="firstname"
            type="text"
            placeholder="First Name"
          />
          <label htmlFor="signup-lastname" className="h-0 w-0 text-transparent">lastname</label>
          <input
            ref={lastName}
            id="signup-lastname"
            onChange={(e) => lastName.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="lastname"
            type="text"
            placeholder="Last Name"
          />
          <label htmlFor="signup-username" className="h-0 w-0 text-transparent">username</label>
          <input
            ref={username}
            id="signup-username"
            onChange={(e) => username.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="username"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="signup-password" className="h-0 w-0 text-transparent">password</label>
          <input
            ref={password}
            id="signup-password"
            onChange={(e) => password.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="password"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="signup-zipcode" className="h-0 w-0 text-transparent">zipcode</label>
          <input
            ref={zipcode}
            id="signup-zipcode"
            onChange={(e) => zipcode.current = e.target.value}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="zipcode"
            type="text"
            placeholder="Zip Code"
          />
          <button className="h-8 w-24 text-white bg-orange-600 self-center justify-center rounded cursor-pointer">Sign Up</button>
          <button className="cursor-pointer text-white my-2" type="button" onClick={() => navigate(-1)}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
