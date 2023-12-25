import React from 'react';
import './InformationBlock.scss';
import { TextBlock } from '../TextBlock/TextBlock';

export function InformationBlock(props) {
  return (
    <div className={`information-block ${props.styleInfo}`}>
      <img src={props.image} alt="info" className={`info-image ${props.styleImage}`} />
      <div className="text-blocks">
        {props.textBlocks.map((textBlock, index) =>
          <TextBlock
            key={index}
            title={textBlock.title}
            text={textBlock.text}
            styleTitle={textBlock.styleTitle}
            styleText={textBlock.styleText}
          />
        )}
      </div>
    </div>
  );
}
