import React from 'react';
import logo from './cartwidget.png';
import './style.css'

function CartWidget() {
    return (
        <>
          <img src={logo} className='cartwidget' href='#'/>
        </>
    );
}

export default CartWidget;