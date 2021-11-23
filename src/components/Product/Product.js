import React from 'react';

const Product = (props) => {
    const {image, title, category} = props.product;
    // console.log(props.product);
    return (
        <div>
            <img src={image} width={100} height={100}/>
            <h3>{title}</h3>
            <p>{category}</p>
        </div>
    );
};

export default Product;