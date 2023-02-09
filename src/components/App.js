import Navbar from './Navbar/Navbar';
import Authorization from './Authorization/Authorization';
import { auth } from '../actions/user';
import { useDispatch, useSelector } from 'react-redux';

import Clients from './Clients/Clients';
import './App.css';
import { useEffect } from 'react';


function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  

  return (
    <div className="app">
      <Navbar />
      {!isAuth && <Authorization />}
      {isAuth && <Clients/>}

    </div>
  );
}

export default App;
