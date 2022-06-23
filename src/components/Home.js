import "../styles/Home.css";

import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./Navigationbar";
import Board from "./Board"
import BoardThumbnail from "./BoardThumbnail";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ boards, boardOrder, dispatch }) => {

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };


  const renderBoards = () => {
    return (
      <div> 
        <BoardThumbnail {...Board}>
          <h1>BOARD CRIADA</h1>
        </BoardThumbnail>
      </div>
    );
  }
  


  const renderCreateBoard = () => {
    return (
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Create New Board Title</Form.Label>
          <Form.Control 
          placeholder="Insert New Board Title" 
          className="CreateInput btn-dark"/>
        </Form.Group>
        <Button variant="dark" onSubmit={renderBoards()}>
          <Link to="/HomeBoard">HomeBoard</Link>
        </Button>
      </Form>
    );
  };

  return (
    <div>
      <Container>
        <div className="HomeContainer">
          <div>{renderCreateBoard()}</div>
          
        </div>
      </Container>
    </div>
    
  );
};


export default Home;
