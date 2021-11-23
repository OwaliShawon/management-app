import React from 'react';

const Catagory = (props) => {
    
    console.log(props.catagory);

    return (
        <div>
            <h1>{props.catagory}</h1>
        </div>
    );
};

export default Catagory;