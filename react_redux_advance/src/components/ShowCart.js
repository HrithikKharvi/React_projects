import style from './ShowCart.module.css'
import CartElement from './CartElement.js'
import {useSelector, useDispatch} from 'react-redux'

const ShowCart = (props) => {

    const cart = useSelector(d => d.cart.cart)

    return (
        <div className={style.container}>
            <div>Your Shopping Cart</div>
            {cart.map(d => <CartElement key={d.name+d.cost+d.count} itemName={d.name} itemCost={d.cost} itemCount={d.count}></CartElement>)}
        </div>
    )
}

export default ShowCart;
