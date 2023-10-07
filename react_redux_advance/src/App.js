import './App.css'
import {useEffect}  from 'react';

import Navbar from './components/Navbar.js'
import ShowCart from './components/ShowCart.js';
import ProductCard from './components/ProductCard.js';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const showCart = useSelector(storeData => storeData.cart.showCart);
  const cart = useSelector(d => d.cart.cart)

  useEffect(() => {
    fetch("https://sample-backend-64c8c-default-rtdb.firebaseio.com/cart.json", {
      method : "PUT",
      body : JSON.stringify(cart)
    })
  })

  return (
    <div className="App">
      <Navbar>
      </Navbar>
      {showCart ? <ShowCart></ShowCart> : ""}
      <div className='description'>BUY YOUR FAVORITE PRODUCTS</div>
      <ProductCard></ProductCard>
    </div>
  );
}

export default App;
