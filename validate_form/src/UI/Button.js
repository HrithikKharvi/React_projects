import React from 'react'
import style from './Button.module.css';

export default function Button(props) {
  return (
    <button type={props.type} onClick={props.onClick} className={style.Button}>
        {props.children}
    </button>
  )
}
