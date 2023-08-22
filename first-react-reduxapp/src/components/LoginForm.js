import style from './LoginForm.module.css'
import { UseSelector, useDispatch } from 'react-redux';

import {authAction} from '../store/storeFile.js';

const LoginForm = (props) => {

    const dispatch = useDispatch();

    const loginClickHandler = () => {
        dispatch(authAction.login())
    }

    return (

        <div className={style.loginFormContainer}>
            <div>
                <label>Username</label>
                <input type="text"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" />
            </div>
            <button onClick={loginClickHandler}>Login</button>
        </div>
    )
}

export default LoginForm;

