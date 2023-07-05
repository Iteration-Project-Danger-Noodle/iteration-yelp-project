import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

function Dashboard({username, setUser}) {
  return (
    <div className='flex'>
      <Navbar username={username} setUser={setUser} />
        <Main />
    </div>
  );
}

export default Dashboard;
