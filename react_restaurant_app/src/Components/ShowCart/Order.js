import React, { useState } from 'react'

import style from './Order.module.css';

function Order(props) {

    const [username, setUsername] = useState("");
    const [usernameChanged, setUsernameChanged] = useState(false);

    const [street, setStreet] = useState("");
    const [streetChanged, setStreetChanged] = useState(false);

    const [pinCode, setPinCode] = useState("");
    const [pinCodeChanged, setPinCodeChanged] = useState(false);

    const [address, setAddress] = useState("");
    const [addressChanged, setAddressChanged] = useState(false);

    const usernameValid = !usernameChanged || username !== ""
    const streetValid = !streetChanged || street !== ""
    const pinCodeValid = !pinCodeChanged || pinCode !== ""
    const addressValid = !addressChanged || address !== ""

    const validateForm = () => {
        return (username !== "" && street !== "" && pinCode !== "" && address !== "")
    }
    const isFormValid = validateForm();

    const validateRequest = (e) => {
        if (!isFormValid) {
            setUsernameChanged(true);
            setStreetChanged(true);
            setPinCodeChanged(true);
            setAddressChanged(true);
            return e.preventDefault();
        }

        props.uploadOrder({
            username: username,
            street: street,
            postalAddress: pinCode,
            address : address
        })
        e.preventDefault();
    }
    const updateUsername = (e) => {
        setUsernameChanged(true);
        setUsername(e.target.value)
    }

    const updateStreet = (e) => {
        setStreetChanged(true);
        setStreet(e.target.value)
    }

    const updatePinCode = (e) => {
        setPinCodeChanged(true);
        setPinCode(e.target.value)
    }

    const updateAddress = (e) => {
        setAddressChanged(true);
        setAddress(e.target.value)
    }

    return (

        <form onSubmit={validateRequest}>
            <div className={`${style.details} ${style.detailsOne}`}>
                <input placeholder='your name!' onChange={updateUsername} value={username} className={`${style.username} ${usernameValid ? "" : style.errorClass}`}/>
                <input placeholder='street' onChange={updateStreet} value={street} className={`${style.street} ${streetValid ? "" : style.errorClass}`} />
                <input placeholder='postalcode' onChange={updatePinCode} value={pinCode} className={`${style.pincode} ${pinCodeValid ? "" : style.errorClass}`}/>
            </div>
            <div className={`${style.details} ${style.detailsTwo}`}>
                <textarea onChange={updateAddress} placeholder='address...' value={address} className={`${addressValid ? "" : style.errorClass}`}/>
                <button type='button' onClick={props.cancelOrder} className={`${style.button} ${style.cancelButton}`}>Cancel</button>
                <button type='submit' className={`${style.button} ${style.cancelButton}`}>Confirm</button>
            </div>
        </form>
    )
}

export default Order;