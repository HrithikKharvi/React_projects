import React, { useState, useRef } from 'react';
import useInputState from '../../hooks/input-validate-hook.js';

import Input from '../ui/Input.js';
import style from './Login.module.css';
import Button from '../ui/Button.js';

function Login() {

    const { value : userInput,
        isValueValid: isUsernameValid,
        valueChanged: userNameTouched,
        valueChangeHandler: usernameChangeHandler,
        handleValueBlur: handleUsernameBlur,
        setValueChanged: setUserNameTouched } = useInputState((username) => {
            return username !== ''
        });
    
    const usernameRef = useRef();

    const { value : passwordInput,
        isValueValid: isPasswordValid,
        valueChanged: passwordTouched,
        valueChangeHandler: passwordChangeHandler,
        handleValueBlur: handlePasswordBlur,
        setValueChanged: setPasswordTouched } = useInputState((password) => {
            return password !== ''
        });

    const passwordRef = useRef();
    
    const isFormValid = isUsernameValid && isPasswordValid;

    const handleFormSubmit = (event) => {
        setUserNameTouched(true);
        setPasswordTouched(true);
        if (!isFormValid) {
            event.preventDefault();
        }
    }

    const userInputChangeHandler = () => {
        usernameChangeHandler(usernameRef);
    }

    const passwordInputChangeHandler = () => {
        passwordChangeHandler(passwordRef);
    }


    const usernameState = !isUsernameValid && userNameTouched;
    const passwordState = !isPasswordValid && passwordTouched;

    const usernameErrorClass = usernameState ? "errorField" : "";
    const passwordErrorClass = passwordState ? "errorField" : "";

    const usernameError = (usernameState) ? <p className={style.errorMessage}>Check username is valid or not</p> : "";
    const passwordError = (passwordState) ? <p className={style.errorMessage}>Check password is valid or not</p> : "";
    return (
        <form className={style.formContainer} onSubmit={handleFormSubmit}>
            <Input className={usernameErrorClass} lableName="Username" type="text" value={userInput} ref={usernameRef} onBlur={handleUsernameBlur} onChange={userInputChangeHandler}></Input>
            {usernameError}
            <Input className={passwordErrorClass} lableName="Password" type="password" value={passwordInput} ref={passwordRef} onBlur={handlePasswordBlur} onChange={passwordInputChangeHandler}></Input>
            {passwordError}
            <Button>Submit</Button>
        </form>
    )
}

export default Login;
