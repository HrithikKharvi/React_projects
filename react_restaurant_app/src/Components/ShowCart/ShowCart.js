import React, {useContext} from 'react';

import Card from '../UI/Card.js'
import ShowCartItem from './ShowCartItem.js'
import AppContext from '../../AppContext/app-context.js';
import Button from '../UI/Button.js'
import Footer from '../UI/Footer.js'
import Label from '../UI/Label.js'

import style from './ShowCart.module.css';

const ShowCart = (props) =>{
    const ctx = useContext(AppContext);
    let itemsName = Object.keys(ctx.cart)
    let cartItems = ctx.cart;
    let isCartEmpty = ctx.count > 0 ? false : true;

    let items = isCartEmpty ? "": <div className={style.cartItemContainer}>
    {itemsName.map(d =><ShowCartItem key={d} name={d} count={cartItems[d].count} price={cartItems[d].price}></ShowCartItem>)}
     </div>

    function closeShowCartUI(){
        props.onShowCartClose()
    }



    function printToConsole(){
        console.log(ctx.total);
        ctx.clearCart();
        closeShowCartUI()
    }

    return (
        <Card width="40%">
            {items}
           <Footer className="spaceBetween">
                  <Label bold="bold" color="black">Total</Label>
                <Label bold="bold" color="black">$ {ctx.total}</Label>
           </Footer>
           <Footer>
                <Button className="addButton" style={{"width":"20%"}} onClick={closeShowCartUI}>Close</Button>
                {!isCartEmpty ? <Button className="cartButton" style={{"width":"20%"}} onClick={printToConsole}>Order</Button> : ""}
            </Footer>
        </Card>
    )
}

export default ShowCart;
