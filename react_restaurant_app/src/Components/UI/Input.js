import React, {useImperativeHandle, forwardRef, useRef} from 'react'
import style from './Input.module.css';

const Input = (props, ref) =>{
    const countInput = useRef()
    const isReadOnly = props.editable == "true" ? true: false;
    useImperativeHandle(ref, () =>{
        return {input : countInput.current}
    })

    let inputJSX = <input  ref={countInput} type={props.type} className="quantity" defaultValue={0}  min={0}></input>

    if(!isReadOnly)inputJSX = <input style={{height:props.height}} ref={countInput} type={props.type} className="quantity" defaultValue={props.value}  min={0} readOnly></input>
    return (
        <React.Fragment>
            {inputJSX}
        </React.Fragment>
    )
}

export default forwardRef(Input);