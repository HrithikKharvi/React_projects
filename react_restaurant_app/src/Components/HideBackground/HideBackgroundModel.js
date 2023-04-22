import { Fragment } from "react"
import ReactDOM from 'react-dom'
import ShowCart from '../ShowCart/ShowCart.js'
import HideBackground from '../HideBackground/HideBackground.js'

const HideBackgroundModel = (props) =>{

    const portal = document.querySelector(".cart-items");

    return (
        <>
         {ReactDOM.createPortal(<HideBackground>
         <ShowCart onShowCartClose={props.onShowCartClose}></ShowCart>
      </HideBackground>, portal)}
        </>
    )
}

export default HideBackgroundModel;
