import { cartActions } from '../storeFile.js';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchCartData = async () => {
            const data = await fetch("https://sample-backend-64c8c-default-rtdb.firebaseio.com/cart.json", { method: "GET" });
            return await data.json();
        }

        try {
            let data = await fetchCartData();
            if (!data) {
                dispatch(cartActions.resetCartData([]));
                return;
            }
            let dataArray = [];
            for (let key of Object.keys(data)) {
                dataArray.push(data[key])
            }

            dispatch(cartActions.resetCartData(dataArray))
            return dataArray;
        } catch (error) {
            console.log(error);
            dispatch(cartActions.setNotification({message:"Failed to save the data", "notificationState" : "error"}))
        }
    }
}

export const saveCartData = (cart) => {
    return async (dispatch) => {
        dispatch(cartActions.setNotification({message:"sending request...", "notificationState" : "progress"}));
        const makeAPIRequest = async () => {
            const response = await fetch("https://sample-backend-64c8c-default-rtdb.firebaseio.com/cart.json", {
                                        method: "PUT",
                                        body: JSON.stringify(cart)
                                    });

            if (!response.ok) {
                 throw new Error();
            }
        dispatch(cartActions.setNotification({ message: "Successfull!", "notificationState": "success" }));
        }
        try {
            await makeAPIRequest();
        } catch (error) {
            dispatch(cartActions.setNotification({message:"Failed sending request", "notificationState" : "error"}));
        }
    }
}