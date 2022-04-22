import React from 'react';
import './NavBar.css';
function NavBar() {
    return (
        <div>
            
            <ul className='nav'>
                <h1 className='nombre'>Motoweb</h1>
                <a href='#'>Street</a>
                <a href='#'>ON/OFF</a>
                <a href='#'>Scooter</a>
                
            </ul>
        </div>
    );
}

export default NavBar;