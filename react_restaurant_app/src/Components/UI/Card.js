import React from 'react'
import style from './Card.module.css';
const Card = (props)=>{
  return (
    <div className={style.card} style={{width:props.width}}>
        {props.children}
    </div>
  )
}

export default Card;
