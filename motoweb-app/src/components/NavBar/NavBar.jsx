import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';
function NavBar() {
    return (
        <div>
            
            <ul className='nav'>
                <h1 className='nombre'>Motoweb</h1>
                <a className='aTexto' href='#'>Street</a>
                <a className='aTexto' href='#'>ON/OFF</a>
                <a className='aTexto' href='#'>Scooter</a>
                <CartWidget/>
            </ul>
        </div>
    );
}

export default NavBar;