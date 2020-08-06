import React from 'react';


function NumberButton(props) {
    return(
        <button onClick={props.numberBtnClickHandler}>{props.num}</button>
    )}

export default NumberButton;

