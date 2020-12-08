import React from 'react';

const Paragraph = (props) => { //arrow function syntax
    const {text} = props;
    return (
        <div>
            <p>Hi</p>
            <p style={{color: 'blue', backgroundColor:'yellow'}}>{text}</p>
        </div>
    );
};

export default Paragraph;