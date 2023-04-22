import React, {useRef, useContext} from 'react'
import Button from '../UI/Button.js'
import Input from './../UI/Input.js'
import style from './MenuItem.module.css';
import AppContext from '../../AppContext/app-context';

const MenuItem = (props) => {
    const countInput = useRef();
    const ctx = useContext(AppContext);

    function addHandler(){
        ctx.addCart(props.name, +countInput.current.input.value, +props.price.toFixed(2));
    }

  return (
    <div className={style.menuItemCover + " " + style[props.addBorder]}>
        <div className={style.item}>
            <div className={style.bold}>{props.name}</div>
            <div className={style.bold}>Amount <Input type="number" value='0' height="40px" editable="true" ref={countInput}></Input></div>
        </div>
        <div className={style.item}>
            <div className={style.description}>{props.description}</div>
            <div><Button onClick={addHandler} className='addButton'>+ Add</Button></div>
        </div>
        <div className={style.item}>
            <div className={style.price + " " + style.bold}>
                $ {+props.price}
            </div>
        </div>
    </div>
  )
}

export default MenuItem;
