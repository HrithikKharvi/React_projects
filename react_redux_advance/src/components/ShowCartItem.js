import style from './ShowCartItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/storeFile.js';

const ShowCartItem = props => {
    
    const dispatch = useDispatch();

    const name = props.productName;
    const cost = props.productCost;
    const description = props.productDescription;

    const handleAddToCart = () => {
        dispatch(cartActions.addToCart({ "data": { "name": name, "cost" : cost, "count": 1}}));
    }

    return (
        <div className={style.container}>
            <div className={style.leftBar}>
                <div>
                    {name}
                </div>
                <div>
                    {description}
                </div>
            </div>
            <div className={style.rightBar}>
                <div>
                    ${cost}
                </div>
                <div>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShowCartItem;

