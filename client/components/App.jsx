import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route exact path='/' element={<Dashboard />}>
          <Route exact path='signup' element={<Signup />}></Route>
          <Route exact path='login' element={<Login />}></Route>
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
