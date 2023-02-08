import Navbar from './Navbar/Navbar';
import Authorization from './Authorization/Authorization';
import { useSelector } from 'react-redux';

import './App.css';


function App() {
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <div className="app">
      <Navbar />
      {!isAuth && <Authorization />}

    </div>
  );
}

export default App;
