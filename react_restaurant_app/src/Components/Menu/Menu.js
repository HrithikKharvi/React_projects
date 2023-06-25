import React, {useEffect, useState} from 'react'
import Card from '../UI/Card';
import MenuItem from './MenuItem.js';

import style from './Menu.module.css';

const Menu = () => {
    
    let [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://sample-backend-64c8c-default-rtdb.firebaseio.com/meals.json',
            { "method": "GET" }
        ).then(res => res.json())
            .then(jsonData => {
                let serverData = []
                for (let key in jsonData) {
                    let obj = {}
                    let itemData = jsonData[key];
                    console.log(itemData)
                    obj["id"] = key;
                    obj["name"] = itemData["name"];
                    obj["price"] = itemData["price"];
                    console.log(typeof(obj["price"]))
                    obj["description"] = itemData["description"];
                    serverData.push(obj)
                }

                setData(serverData);
            })
    }
, [])


    // let data = [
    //     {
    //         "id": Math.random(),
    //         "name" : "Sushi",
    //         "price" : +22.99,
    //         "description": "Finest Fish and Veggie",
    //     },
    //     {
    //         "id": Math.random(),
    //         "name" : "Schnitzel",
    //         "price" : +16.50,
    //         "description": "A German spcecility",
    //     },
    //     {
    //         "id": Math.random(),
    //         "name" : "Barbecue Burger",
    //         "price" : +12.99,
    //         "description": "American, raw, meaty",
    //     },
    //     {
    //         "id": Math.random(),
    //         "name" : "Green Bowl",
    //         "price" : +18.99,
    //         "description": "Healthy....and green",
    //     },
    // ];

    return (
        <Card width="60%">
            {data.length <= 0 ? "fetching data from server!" : data.map(d => <MenuItem key={d.id} name={d.name} price={d.price} description={d.description}></MenuItem>)}
        </Card>
    )
}

export default Menu;


