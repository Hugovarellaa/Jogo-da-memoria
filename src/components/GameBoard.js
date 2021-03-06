import React from 'react';
import CardElement from './CardElement';

export default function GameOver(props){
    return (
        <div id="gameBoard"> 
            {props.cards.map((card, index) =>
                <CardElement handlerFlip={props.handlerFlip} key={index} card={card}></CardElement>
             )}
        </div>
    )
}