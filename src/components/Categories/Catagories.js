import React, { useEffect, useState } from 'react';
import Catagory from '../Category/Catagory';

const Catagories = () => {
    const [catagories, setCatagories] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCatagories(json))
    },[])

    // console.log(catagories);

    return (
        <div>
            {/* {
                catagories.map(catagory => <Catagory catagory = {catagory}></Catagory>)
            } */}
        </div>
    );
};

export default Catagories;