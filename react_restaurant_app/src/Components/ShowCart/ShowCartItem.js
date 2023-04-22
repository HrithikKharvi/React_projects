import React, {useContext, useState, useEffect} from 'react'

import Input from '../UI/Input.js'
import Button from '../UI/Button.js'
import style from './ShowCartItem.module.css';
import AppContext from '../../AppContext/app-context.js';

const ShowCartItem = (props) =>{
    const [itemCount, setItemCount] = useState("x " + props.count);

    const ctx = useContext(AppContext);

    useEffect(() =>{
        setItemCount("x " + +props.count);
    }, [props.count])

    
    const onAddItem = () => {
        ctx.addCart(props.name, 1, +props.price);
    }

    const onRemoveItem = () => {
        ctx.removeCart(props.name);
    }
    return (
        <div className={style.itemContainer}>
            <div className={style.details}>
                <div className={style.itemName}>{props.name}</div>
                <div className={style.costCount}>
                    <div className={style.price}>$ {+props.price.toFixed(2)}</div>
                    <div><Input key={itemCount} type="text" value={itemCount} editable="false"></Input></div>
                </div>
            </div>
            <div className={style.allButtons}>
                <Button className='cartButton' onClick={onRemoveItem}>-</Button>
                <Button className='cartButton' onClick={onAddItem}>+</Button>
            </div>
        </div>
    )
}

export default ShowCartItem;
