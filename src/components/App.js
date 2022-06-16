import "../styles/App.css";

import {React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomeBoard from "./HomeBoard"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<HomeBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
