import "../styles/App.css";

import {React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home"
import HomeBoard from "./HomeBoard";
import Navigationbar from "./Navigationbar";

function App() {
  return (
    <div className="App">
          <Navigationbar />

      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/HomeBoard' element={<HomeBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
