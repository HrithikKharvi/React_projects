import React, {useState} from 'react'

import logo from './logo.svg';
import PageHeader from './Components/Header/PageHeader';
import PageBody from './Components/Body/PageBody';
import ShowCart from './Components/ShowCart/ShowCart.js'

import './App.css';
import HideBackgroundModel from './Components/HideBackground/HideBackgroundModel';

function App() {
  const [showCart, setShowCart] = useState(false);
  function onShowCartClick(){
    setShowCart(true);
  }

  function onShowCartClose(){
    setShowCart(false);
  }

  return (
    <div className="App">
      <PageHeader  onShowCartClick={onShowCartClick}>
      </PageHeader>
      <PageBody>

      </PageBody>
      {showCart ? 
      <HideBackgroundModel onShowCartClose={onShowCartClose}></HideBackgroundModel>
      :
      ""
      }
    </div>
  );
}

export default App;
