import React from 'react'
import Card from '../UI/Card';
import MenuItem from './MenuItem.js';

import style from './Menu.module.css';

const Menu = () =>{

    let data = [
        {
            "id": Math.random(),
            "name" : "Sushi",
            "price" : +22.99,
            "description": "Finest Fish and Veggie",
        },
        {
            "id": Math.random(),
            "name" : "Schnitzel",
            "price" : +16.50,
            "description": "A German spcecility",
        },
        {
            "id": Math.random(),
            "name" : "Barbecue Burger",
            "price" : +12.99,
            "description": "American, raw, meaty",
        },
        {
            "id": Math.random(),
            "name" : "Green Bowl",
            "price" : +18.99,
            "description": "Healthy....and green",
        },
    ];

    return (
        <Card width="60%">
            {data.map(d => <MenuItem key={d.id} name={d.name} price={d.price} description={d.description}></MenuItem>)}
        </Card>
    )
}

export default Menu;


