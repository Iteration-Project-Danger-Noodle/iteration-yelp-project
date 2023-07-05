import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = ({fetchedData, setFetchedData}) => {

  return (
    <article className='flex flex-wrap gap-1 p-0 m-0 mt-1 ml-72 w-auto rounded-xl'>
      {fetchedData.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          location={item.location.display_address}
          closes={item.is_closed}
          price={item.price}
          picUrl={item.image_url}
        />
      ))}
    </article>
  );
};

export default Main;
