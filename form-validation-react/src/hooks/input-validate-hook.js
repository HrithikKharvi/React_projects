import React, {useState} from 'react';

const useInputState = (validateFunction) => {
    const [value, setValue] = useState("");
    const isValueValid = validateFunction(value);
    const [valueChanged, setValueChanged] = useState(false);

    const valueChangeHandler = (valueRef) => {
        setValue(valueRef.current.target.value);
    }

    const handleValueBlur = () => {
        setValueChanged(true);
    }

    return {value, isValueValid, valueChanged, valueChangeHandler, handleValueBlur, setValueChanged}
}

export default useInputState;
