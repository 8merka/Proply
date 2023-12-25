import React from 'react';
import './Community.scss';

export function Community(props) {
    return (
        <div className={`communityBlock ${props.styleCommunity}`}>
            <img src={props.image} alt="community" className={`community__image ${props.styleImage}`} />
            <div className="community__textBlock">
                <p className={`name ${props.styleName}`} >{props.name}</p>
                <p className={`texComm ${props.styleText}`}>{props.text}</p>
            </div>
        </div>
    );
}
