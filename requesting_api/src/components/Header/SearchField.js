import React, {useRef} from 'react';
import style from './SearchField.module.css';

function SearchField(props){

    const inputRef = useRef();

    function changeHandler(){
        props.onChange(inputRef.current.value);
    }

    return (
        <input className={style.searchField} type="text" ref={inputRef} onChange={changeHandler}>
        </input>
    )
}

export default SearchField;
