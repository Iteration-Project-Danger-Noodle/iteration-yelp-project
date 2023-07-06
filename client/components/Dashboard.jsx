import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { useState, useEffect } from 'react';
import dummyData from '../../data.json';
import axios from 'axios';
function Dashboard({ username, setUser, zipcode }) {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    if (username) {
      axios
        .post('http://localhost:3000/yelp/search', {
          term: '',
          location: zipcode,
        })
        .then((response) => {
          const rawData = response.data.businesses;
          console.log(rawData);
          setFetchedData(rawData);
        })
        .catch((error) => console.log(error));
    } else {
      setFetchedData(dummyData.businesses);
    }
  }, [username]);

  return (
    <div data-testid="dash-element" className='flex'>
      <Navbar
        username={username}
        setUser={setUser}
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
      />
      <Main fetchedData={fetchedData} setFetchedData={setFetchedData} />
    </div>
  );
}

export default Dashboard;
