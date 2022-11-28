import React from 'react';
import '../styles/Screen.css';

const Screen = ({ input }) => (
    <div className="calculator-screen">
        {input}
    </div>
);

export default Screen;