import React from 'react';
import '../App.css';

const Box = (props) => {
  let resultClassName = props.result.length === 0 ? 'box' : props.result;
  return (
    <div className={resultClassName}>
      <h1>{props.title}</h1>
      {props.item ? (
        <img className="item-img" src={props.item.img} alt="img" />
      ) : (
        <div className="div-btn">승자는 과연</div>
      )}
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
