import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const [user, setUser] = useState({});

  return (  
    <div data-testid="app-element">
      <Routes location={background || location}>
        <Route
          exact
          path='/'
          element={
            <Dashboard
              username={user.username}
              setUser={setUser}
              zipcode={user.zipcode}
            />
          }
        >
          <Route
            exact
            path='signup'
            element={!user.username && <Signup />}
          ></Route>
          <Route
            exact
            path='login'
            element={!user.username && <Login />}
          ></Route>
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path='signup'
            element={!user.username && <Signup setUser={setUser} />}
          />
          <Route
            path='login'
            element={!user.username && <Login setUser={setUser} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
