import React, {useReducer} from 'react';

const AppContext = React.createContext({
    count:0,
    total:0,
    cart : {},
    addCart : () => {},
    removeCart : () => {},
    clearCart : () => {}
})

const setCartData = (state, action) =>{
    if(action.type == 'CLEAR_CART'){
        return {count:0, "total" : 0, cart : {}}
    }


    let itemName = action.data.itemName;
    let cart = state.cart;

    if(action.type == 'Add-cart'){
         let count = action.data.count;
         let price = action.data.price;
         let tot = (price * count).toFixed(2)
        let obj = cart[itemName];
        if(obj){
            obj.count += count;
        }else{
            obj = {count:count, price : action.data.price}
        }

        cart[itemName] = obj;
        return {count : state.count + count, "total" : (+state.total + +tot).toFixed(2), cart : cart};
    }else if(action.type == 'Remove-cart'){
        let obj = cart[itemName];
        let price = obj.price
        obj.count--;
        if(obj.count == 0)delete cart[itemName];
        else cart[itemName] = obj;
        return {count : state.count - 1, "total": +(state.total - price).toFixed(2),cart : cart};
    }
    
}

export const AppContextComponent = (props) =>{
    const [cartState, dispatchFunction] = useReducer(setCartData, {"count": 0, "total" : 0, "cart": {}})
    
    const addCartHandler = (itemName, count, price) =>{
        dispatchFunction({type:"Add-cart", data : {itemName, count, price}});
    }
    const removeCartHandler = (itemName) => {
        dispatchFunction({type:"Remove-cart", data : {itemName}})
    }

    function clearCart(){
        dispatchFunction({type:"CLEAR_CART"})
    }

    return (
        <AppContext.Provider value={{
            cart : cartState.cart,
            count : cartState.count,
            total:cartState.total,
            addCart: addCartHandler,
            removeCart: removeCartHandler,
            clearCart: clearCart
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
