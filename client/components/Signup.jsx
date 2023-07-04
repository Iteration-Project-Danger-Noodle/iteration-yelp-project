import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  const URL = "http://localhost:3000/signup";


  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const zipcodeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const zipcode = zipcodeRef.current.value;

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        zipcode: zipcode,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("this is data:", data);
        navigate('/');
      })
      .catch(error =>{
        console.error('invalid setup');
      });
      

  };

  return (
    <div className="fixed flex justify-center items-center top-0 h-screen w-screen bg-opacity-50 bg-slate-950">
      <div className="flex justify-center items-center bg-black bg-opacity-60 border border-solid border-white rounded-xl w-auto h-auto p-8">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between items-center h-auto rounded-full">
          <input
            ref={firstNameRef}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="firstname"
            type="text"
            placeholder="First Name"
          />
          <input
            ref={lastNameRef}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="lastname"
            type="text"
            placeholder="Last Name"
          />
          <input
            ref={usernameRef}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            ref={passwordRef}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="password"
            type="password"
            placeholder="Password"
          />
          <input
            ref={zipcodeRef}
            className="w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200"
            name="zipcode"
            type="text"
            placeholder="Zip Code"
          />
          <input
            id="formButton"
            type="submit"
            value="Submit"
            className="h-8 w-24 text-white bg-indigo-900 self-center justify-center rounded cursor-pointer"
          />
        <button className="cursor-pointer text-white" type="button" onClick={() => navigate(-1)}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
