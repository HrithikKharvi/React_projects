import style from './CartElement.module.css';
import { cartActions } from '../store/storeFile.js';
import { useSelector, useDispatch } from 'react-redux';

const CartElement = props => {

    const itemName = props.itemName
    const itemCost = props.itemCost
    const itemCount = props.itemCount

    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(cartActions.addToCart({ "data": { "name": itemName, "cost" : itemCost, }}))
    }

    const handleRemoveCart = () => {
        dispatch(cartActions.removeFromCart({ "data": { "name": itemName , "cost" : itemCost} }))
    }

    return (
        <div className={style.container}>
            <div className={style.leftBar}>
                <div className={style.itemName}>{itemName}</div>
                <div >x <span className={style.cost}>{itemCount}</span></div>
            </div>
            <div className={style.rightBar}>
                <div> <span className={style.totalCost}>$ {itemCost * itemCount} </span>($6/item)</div>
                <div>
                    <button className={style.cartAddRemove} onClick={handleRemoveCart}>-</button>
                    <button className={style.cartAddRemove} onClick={handleAddCart}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartElement;
