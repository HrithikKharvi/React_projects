import React from 'react';
import style from './PageHeader.module.css';
import Navbar from './Navbar';

const PageHeader = (props) =>{
    return (
        <div className={style.pageHeader}>
            <Navbar onShowCartClick={props.onShowCartClick}></Navbar>
        </div>
    )
}

export default PageHeader;
