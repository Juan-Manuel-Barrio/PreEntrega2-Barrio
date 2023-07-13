import React from 'react';
import CartWidget from './CartWidget/CartWidget';

import { Link } from 'react-router-dom';

const NavBar = () => {
return (
    <nav className="navbar navbar-dark bg-black">
    <div className="container">
        
        <Link  to='/' className="navbar-brand">Bang-OK</Link>

        <Link to='/category/remeras'>
            <p>Remeras</p>
        </Link>

        <Link to='/category/buzos'>
            <p>Buzos</p>
        </Link>
        
        <Link to='/category/zapatillas'>
            <p>Zapatillas</p>
        </Link>        

        <div className="d-flex">
        <input type="text" className="form-control me-2" placeholder="Buscar" />
        <button className="btn btn-outline-light me-2" type="button">
            Buscar
        </button>
        <CartWidget />
        </div>
    </div>
    </nav>
);
};

export default NavBar;