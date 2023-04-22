import React from 'react'
import style from './Button.module.css';

const Button = (props) =>{
    return (
        <button style={props.style} onClick={props.onClick} className={style[props.className]}>
            {props.children}
        </button>
    )
}

export default Button;