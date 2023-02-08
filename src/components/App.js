import Navbar from './Navbar/Navbar';
import Authorization from './Authorization/Authorization';
import { useSelector } from 'react-redux';

import './App.css';


function App() {
  const auth = useSelector(state => state.auth.isAuth)
  console.log(auth)

  return (
    <div className="app">
      <Navbar />
      {/* <div className="wrap"> */}
         <Authorization />
      {/* </div> */}
    </div>
  );
}

export default App;
