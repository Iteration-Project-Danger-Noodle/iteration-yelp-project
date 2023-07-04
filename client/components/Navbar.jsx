import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [sendPreference, setSendPreference] = useState({
    term: '',
    location: '',
  });
  const [name, setName] = useState(null)
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(sendPreference);
    axios
      .post('/yelp/search', sendPreference)
      .then((response) => {
        console.log('data sent to server');
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main className='flex flex-col justify-between items-right p-4 rounded-xl w-1/4 fixed'>
        <div>
          <h3 className='m-0 text-6xl font-black tracking-wider uppercase text-right text-white'>{name ? name : 'Me' }</h3>
          <h3 className='m-0 text-6xl font-black tracking-wider uppercase text-right text-white'>Want</h3>
          <h3 className='m-0 text-6xl font-black tracking-wider uppercase text-right text-white'>Food</h3>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-end m-0'>
          <input
            name='food'
            type='text'
            placeholder='How Hungry You Wanna Be?'
            className='w-60 h-8 p-4 my-4 block rounded-3xl bg-white border border-solid border-gray-200'
            value={sendPreference.term}
            onChange={(e) =>
              setSendPreference({ ...sendPreference, term: e.target.value })
            }
          />
          <input
            name='location'
            type='text'
            placeholder='Enter Location'
            className='w-60 h-8 p-4 block mb-4 rounded-3xl bg-white border border-solid border-gray-200'
            value={sendPreference.location}
            onChange={(e) =>
              setSendPreference({ ...sendPreference, location: e.target.value })
            }
          />
          <button className='w-48 h-8 my-2 cursor-pointer text-white bg-orange-600 border-none rounded tracking-wide capitalize'>
            Search
          </button>
        </form>
        <Link to="/login" state={{ background: location }}>
          Log In
        </Link>
        <Link to="/signup" state={{ background: location }}>
          Sign Up
        </Link>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
