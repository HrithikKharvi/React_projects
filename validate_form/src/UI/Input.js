import React from 'react';
import style from './Input.module.css';

function Input(props){

    function handleChange(e){
        let text = e.target.value
        props.onChange(text);
    }

    return (
        <input onChange={handleChange} value={props.value} className={style.textfield} type={props.type}>
        </input>
    )
}

export default Input;
