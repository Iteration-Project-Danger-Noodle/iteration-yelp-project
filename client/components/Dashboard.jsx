import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

function Dashboard() {
  return (
    <div className='flex'>
        <Navbar />
        <Main />
    </div>
  );
}

export default Dashboard;
