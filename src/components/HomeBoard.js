import "../styles/App.css";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./Navigationbar";
import Board from "./Board"

function HomeBoard() {
  return (
    <div className="HomeBoard">
        <Navigationbar />
        <Board/>
    </div>
  );
}

export default HomeBoard;
