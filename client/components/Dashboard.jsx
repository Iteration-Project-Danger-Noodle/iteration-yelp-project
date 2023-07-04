import React from 'react';
import Header from './Header';
import Main from './main';
import './dashboard.scss';
import { useState } from 'react';

function Dashboard() {

  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div className='dashboard'>
      <Header 
      fetchedData={fetchedData}
      setFetchedData={setFetchedData}
      />
      <Main 
      fetchedData={fetchedData}
      setFetchedData={setFetchedData}
      />
    </div>
  );
}

export default Dashboard;
