import React from 'react';
import './TextBlock.scss';

export function TextBlock(props){
  return (
    <div className={`text-block ${props.styleTextBlock}`}>
      <h1 className={`title ${props.styleTitle}`} >{props.title}</h1>
      <p className={`text ${props.styleText}`}>{props.text}</p>
    </div>
  );
}

