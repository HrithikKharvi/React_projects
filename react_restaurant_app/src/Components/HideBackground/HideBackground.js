import React from 'react';
import style from './HideBackground.module.css';

const HideBackground = (props) =>{
    return (
        <div onClick={props.onClick} className={style.hideBackground}>
            {props.children}
        </div>
    )
}

export default HideBackground;
