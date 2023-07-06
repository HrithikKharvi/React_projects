import React from 'react';
import styles from './Card.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Card = (props) => {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const toggle = useSelector(state => state.toggle);

    const incrementHandler = () => {
        dispatch({ type: "increment" });
    }

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    }
    
    const toggleHandler = () => {
        dispatch({ type: "toggle" });
    }
    return (
        <div className={styles.card}>
            <h1 className={styles.cardHeader}>
                Counter Values
            </h1>
            <hr/>

            <div className={styles.cardBody}>
                {!toggle ? <div>
                    <label className={styles.counterValue}>
                        {counter}
                    </label>
                </div>
                    :
                    ""
                }
                <div>
                    <button onClick={incrementHandler}>
                        Increment +
                    </button>
                     <button onClick={toggleHandler}>
                        Toggle
                    </button>
                    <button onClick={decrementHandler}>Decrement -</button>
                </div>
            </div>
        </div>
    )
}

export default Card;