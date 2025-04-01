import React from 'react';
import '../App.css';

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {props.item ? (
        <img className="item-img" src={props.item.img} alt="img" />
      ) : (
        <div className="div-btn">버튼을 클릭해주세요.</div>
      )}

      <h2>WIN</h2>
    </div>
  );
};

export default Box;
