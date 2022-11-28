import React from 'react';
import '../styles/ClearBtn.css';

const ClearBtn = (props) => (
    <div 
        className="calculator-btn-clear" 
        onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ClearBtn;