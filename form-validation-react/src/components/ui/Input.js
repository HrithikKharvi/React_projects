import React,{useImperativeHandle, useRef, forwardRef} from 'react';

import style from './Input.module.css';

const Input = forwardRef((props, ref) => {
    const inputBoxRef = useRef();

    useImperativeHandle(ref, () => {
        return {target : inputBoxRef.current}
    })

    return (
        <>
            <label className={style.lableName}>{props.lableName}</label>
            <input type={props.type} ref={inputBoxRef} onBlur={props.onBlur} onChange={props.onChange} className={style.inputBox + " " + style[props.className]} value={props.value}/>
        </>
    )
})

export default Input;