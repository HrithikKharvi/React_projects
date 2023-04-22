import React from 'react';
import Menu from '../Menu/Menu';

import style from './PageBody.module.css';

const PageBody = () =>{
    return (
        <div className={style.pageBody}>
            <Menu></Menu>
        </div>
    );
}

export default PageBody;
