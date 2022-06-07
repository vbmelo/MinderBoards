import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 75px;
  width: 200px;
  background: blue;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0,0,0,0.5);
  background: linear-gradient(0deg, rgba(0,0,0,0.2987570028011205) 0%, rgba(0,0,0,0.304359243697479) 100%);
`;

const Title = styled.h3`
  color: white;
  text-decoration: none;
`;
// const Button = styled.input`

//   width: 20px;
//   height: 20px;
//   font-size: 22px;
//   padding: 10px;
//   box-sizing: border-box;
//   border-radius: 3px;
//   border: none;
//   outline-color: blue;
//   box-shadow: 0 2px 4px grey;
//   align-self: center;
// `;



const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
        <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
