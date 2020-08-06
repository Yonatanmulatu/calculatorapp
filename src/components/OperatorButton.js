import React from 'react';

function OperatorButton(props) {
        return(
            <button onClick={props.operatorBtnClickHandler}>{props.operator}</button>
        )}

export default OperatorButton;
