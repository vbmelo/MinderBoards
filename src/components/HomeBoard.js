import "../styles/App.css";

import {React} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./Navigationbar";
import Board from "./Board"
import { Button } from "react-bootstrap";
import Home from "./Home";

function HomeBoard() {
  return (
    <div className="HomeBoard">
        {/* <Navigationbar /> */}
        <div>
          <h4 className="p-3 text-white">Primeira Board</h4>
        </div>
        <Board/>
    </div>
  );
}

export default HomeBoard;
