import React from 'react';
import {useParams} from 'react-router-dom'
let data = [
    "Milk",
    "Butter",
    "Cheese",
    "Paneer"
];

const Products = () => {

    let { productId } = useParams();

    return <div>
        <h1>Products</h1>
        <ul>
            <li>{data[productId]}</li>
        </ul>
    </div>
}

export default Products;