import React from 'react';

const Card = ({ picUrl, name, location, closes, price }) => {
  const [fav, setFav] = React.useState(false)

  return (
    <div data-testid="card-element" className='w-80 h-80 shadow-md' >
      <div>
        <div className='w-80 h-80 mb-2 flex absolute'>

          <img
            className='w-full h-auto object-cover block'
            src={picUrl}
            alt='restuarant'
          />
        </div>
        <div className='w-80 h-80 flex flex-col text-right text-transparent hover:text-white hover:bg-slate-800 hover:bg-opacity-70 p-4 absolute'>
          {fav
            ? <i onClick={() => setFav(prev => !prev)} className="fa-solid fa-star fa-2xl left-4 top-72 absolute text-yellow-500" ></i>
            : <i onClick={() => setFav(prev => !prev)} className="fa-solid fa-star fa-2xl left-4 top-72 absolute text-slate-800 text-opacity-50"></i>
          }
          <h5 className='m-0'><span className='m-0 text-2xl text-white font-bold bg-slate-800 bg-opacity-20'>{name}</span></h5>
          <p className='m-0 text-sm'>{location[0]}</p>
          <p className='m-0 text-xs'>{location[1]}</p>
          <p className='mt-auto m-0'>{price && price}</p>
          <p className='m-0'>{closes ? 'Closed' : 'Open'}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
