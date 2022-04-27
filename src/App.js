import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './SpaceXComponent/NavBar';
import './App.css';
import AllData from './SpaceXComponent/SpaceXAll';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllData />
    </div>
  );
}

export default App;
