import './App.css'
import {useEffect}  from 'react';

import Navbar from './components/Navbar.js'
import ShowCart from './components/ShowCart.js';
import ProductCard from './components/ProductCard.js';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/Notification.js';
import { cartActions } from './store/storeFile.js';
import { saveCartData, fetchCartData } from './store/reducers/cartActions.js';

let isInitial = true;


function App() {
  const showCart = useSelector(storeData => storeData.cart.showCart);
  const notificationObject = useSelector(object => object.cart.notification);
  const isChanged = useSelector(object => object.cart.isChanged);

  const cart = useSelector(d => d.cart.cart)
  const dispatch = useDispatch();


  useEffect(
    () => {
      dispatch(fetchCartData());
    }, []
  )

  useEffect(
    () => {
              if (isInitial) {
                isInitial = false;
                return;
              }
      
      if(isChanged)
      dispatch(saveCartData(cart));
    }
    , [cart, dispatch]
  )

  return (
    <div className="App">
      {notificationObject && <Notification></Notification>}
      <Navbar>
      </Navbar>
      {showCart ? <ShowCart></ShowCart> : ""}
      <div className='description'>BUY YOUR FAVORITE PRODUCTS</div>
      <ProductCard></ProductCard>
    </div>
  );
}

export default App;
