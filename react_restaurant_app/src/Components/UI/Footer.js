import React from 'react'
import style from './Footer.module.css'

const Footer = (props) =>{
    return (
        <div className={style.container + " " + style[props.className]}>
            {props.children}
        </div>
    )
}

export default Footer;
