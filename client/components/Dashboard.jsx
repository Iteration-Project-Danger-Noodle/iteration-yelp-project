import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

function Dashboard() {
  return (
    <div className='flex sm:flex-col'>
      <div className='sticky left-auto'>
        <Navbar />
      </div>
      <div className='absolute inset-x-1/4 w-3/4'>
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
