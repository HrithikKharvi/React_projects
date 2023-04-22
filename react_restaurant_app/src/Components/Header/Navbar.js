import React from 'react'
import style from './Navbar.module.css';
import AddCart from '../AddCart/AddCart';

const Navbar = (props) =>{
    return (
        <div className={style.navBar}>
            <div className={style.pageName}>
                Find-Meal
            </div>
            <AddCart onShow={props.onShowCartClick}></AddCart>
        </div>
    )
}

export default Navbar;