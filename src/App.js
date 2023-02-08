import Navbar from './Navbar/Navbar';
import Authorization from './Authorization/Authorization';
import './App.css';


function App() {
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
