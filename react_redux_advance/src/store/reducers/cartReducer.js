import { createSlice } from '@reduxjs/toolkit';
import { cartActions } from '../../store/storeFile.js';
const initialState = {
    "cart": [],
    "cost": +0,
    "showCart": false,
    "notification": null,
    "isChanged" : false
};

const cartSlice = createSlice({
    name: "cart",
    "initialState": initialState,
    reducers: {
        resetCartData(state, action) {
            console.log("Received the initial data !");
            state.cart = action.payload;
        },

        setNotification(state, action) {
            let { message, notificationState } = action.payload;
            state.notification = { message, "state" : notificationState };
        },

        addToCart(state, action) {
            state.isChanged = true;
            let itemName = action.payload.data.name;
            let itemCost = action.payload.data.cost;
            let itemCount = action.payload.data.count;

            let item = state.cart.find(d => d.name == itemName)

            if (!item) {
                let newCartItem = {
                    "name": itemName,
                    "count": itemCount,
                    "cost": itemCost
                };

                state.cart.push(newCartItem);
            } else {
                item.count++;
            }

            state.cost += +itemCost;
        },

        removeFromCart(state, action) {
            state.isChanged = true;
            let name = action.payload.data.name;
            let cost = action.payload.data.cost;

            let item = state.cart.find(d => d.name == name)

            if (item) {
                item.count--;
                if (item.count == 0) {
                    state.cart = state.cart.filter(d => d.name != name);
                }
            }

        },

        toggleCart(state, action) {
            state.showCart = !state.showCart;
            console.log(state.showCart)
        }
    }
})

export default cartSlice;
