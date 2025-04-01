import React from 'react';
import '../App.css';

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrDnvdR5nY3CTEL6EcyoJvJWYjnfm9-QvqQ&s' &&
          props.item.img
        }
        alt="img"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
