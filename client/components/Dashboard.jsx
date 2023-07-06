import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { useState, useEffect } from 'react';
import dummyData from '../../data.json'


function Dashboard({ username, setUser }) {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    setFetchedData(dummyData.businesses)
  }, []);

  return (
    <div data-testid="dash-element" className='flex'>
      <Navbar
        username={username}
        setUser={setUser}
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
