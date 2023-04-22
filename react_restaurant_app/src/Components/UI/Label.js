import React from 'react'
import style from '../UI/Label.module.css';

const Label = (props) =>{
    return(
        <div className={style.labelContainer} style={{color:props.color, fontWeight:props.bold}}>
            {props.children}
        </div>
    )
}

export default Label;
