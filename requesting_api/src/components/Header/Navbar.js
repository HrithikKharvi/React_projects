import React from 'react';
import style from './Navbar.module.css';
import SearchField from './SearchField';

function Navbar(props){

    return (
        <div className={style.navbarContainer}>
            <SearchField onChange={props.onFilter}>
            </SearchField>
        </div>
    )
}

export default Navbar;
