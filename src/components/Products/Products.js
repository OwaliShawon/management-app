import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json=>setProducts(json))
    },[])

    console.log(products)

    return (
        <div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;