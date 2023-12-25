import React from 'react';
import { TextBlock } from '../TextBlock/TextBlock';
import './Statistick.scss';

export function Statistick(props){
  return (
    <div className="statistick">
      {Array(4).fill().map((_, i) => (
        <div className={`statistick-block statistick-block-${i}`} key={i}>
          <TextBlock 
            styleTextBlock="text-block_statistick"
            styleTitle="title_statistick" 
            styleText="text_statistick" 
            title={props.titles[i]} 
            text={props.texts[i]} 
          />
        </div>
      ))}
    </div>
  );
}
