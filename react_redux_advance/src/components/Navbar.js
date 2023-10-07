import style from './Navbar.module.css';
import { cartActions} from '../store/storeFile.js'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = (props) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);
    console.log(cartItems)
    const totalCartItems = Object.keys(cartItems).length;

    const handleShowCart = () => {
        dispatch(cartActions.toggleCart());
    }

    return (

        <div className={style.navbarContainer}>
            <div className={style.navbarBrand}>React-Redux App</div>
            <div className={style.navbarCartContainer}><button onClick={handleShowCart} className={style.cartButton}>My Cart <span className={style.cartCount}>{totalCartItems}</span></button></div>
        </div>
    )
}

export default Navbar;