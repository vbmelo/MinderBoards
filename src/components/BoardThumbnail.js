import React from "react";
import '../styles/Thumbnail.css';

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <div className="Thumbnail">
        <div className="Title">{title}</div>
    </div>
  );
};

export default BoardThumbnail;
