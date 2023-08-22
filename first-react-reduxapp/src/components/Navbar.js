import style from './Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';

import {authAction} from '../store/storeFile.js'

const Navbar = (props) => {
    
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        dispatch(authAction.logout())
    }

    return (
        <div className={style.container}>
            <div className={style.brand}>Redux-React</div>
            <div>
                <ul>
                    {isAuthenticated ? <li className={style.logoutButton} onClick={handleLogoutClick}>Logout</li> : ""}
                    <li>Sales</li>
                    <li>Products</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
