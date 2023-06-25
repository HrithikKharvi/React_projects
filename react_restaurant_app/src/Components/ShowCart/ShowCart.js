import React, {useContext, useState} from 'react';

import Card from '../UI/Card.js'
import ShowCartItem from './ShowCartItem.js'
import AppContext from '../../AppContext/app-context.js';
import Button from '../UI/Button.js'
import Footer from '../UI/Footer.js'
import Label from '../UI/Label.js'
import Order from './Order.js';

import style from './ShowCart.module.css';

const ShowCart = (props) => {
    const [placeOrder, setPlaceOrder] = useState(false);

    const ctx = useContext(AppContext);
    let itemsName = Object.keys(ctx.cart)
    let cartItems = ctx.cart;
    let isCartEmpty = ctx.count > 0 ? false : true;

    let items = isCartEmpty ? "": <div className={style.cartItemContainer}>
    {itemsName.map(d =><ShowCartItem key={d} name={d} count={cartItems[d].count} price={cartItems[d].price}></ShowCartItem>)}
     </div>

    function closeShowCartUI(){
        props.onShowCartClose();
    }

    function uploadCartData(userdata) {
        fetch('https://sample-backend-64c8c-default-rtdb.firebaseio.com/orders.json',
            {
                "method": 'POST',
                body: JSON.stringify({
                        userData: userdata,
                        "cart": ctx.cart
                })
            }
        ).then(() => {
            closeShowCartUI();
            ctx.clearCart();
        })
    }

    function showPlaceOrderUI() {
        setPlaceOrder(true);
    }

    function cancelOrder() {
        setPlaceOrder(false);
    }

    let showOrderUI = <Footer>
                <Button className="addButton" style={{"width":"20%"}} onClick={closeShowCartUI}>Close</Button>
                {!isCartEmpty ? <Button className="cartButton" style={{"width":"20%"}} onClick={showPlaceOrderUI}>Order</Button> : ""}
    </Footer>
    
    if (placeOrder) {
        showOrderUI = <Footer>
                         <Order uploadOrder={uploadCartData} cancelOrder={cancelOrder}></Order>
                      </Footer>
    }


    return (
        <Card width="40%">
            {items}
           <Footer className="spaceBetween">
                  <Label bold="bold" color="black">Total</Label>
                <Label bold="bold" color="black">$ {ctx.total}</Label>
            </Footer>
            {showOrderUI}
        </Card>
    )
}

export default ShowCart;
