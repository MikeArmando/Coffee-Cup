import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
// Images
import Logo from '../../assets/img/Logo.png'
import User from '../../assets/img/user.png'
import Cart from '../../assets/img/cart.png'
import Menu from '../../assets/img/menu.png'

export const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/coffee-cup">
                    <img src={Logo} alt=""></img>
                </Link>
                <ul class="nav-item-box">
                    <li class="nav-items">
                        <Link to='/coffee'>Coffee</Link>
                        <ul class="sub-menu-box">
                            <li><Link to="/hot">Hot Coffee</Link></li>
                            <li><Link to="/cold">Cold Coffee</Link></li>
                            <li><Link to="/expresso">Expresso</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Frappe'>Frappe</Link>
                        <ul class="sub-menu-box">
                            <li><a href="frappe/dulce.html">Frappe de Dulce</a></li>
                            <li><a href="frappe/frutas.html">Frappe de frutas</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Breakfast'>Breakfast</Link>
                        <ul class="sub-menu-box">
                            <li><a href="desayuno/sandwich.html">Sandwiches</a></li>
                            <li><a href="desayuno/avenas.html">Avenas</a></li>
                            <li><a href="desayuno/completo.html">Desayuno completo</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Drinks'>Drinks</Link>
                        <ul class="sub-menu-box">
                            <li><a href="bebidas/jugo.html">Jugos</a></li>
                            <li><a href="bebidas/alcohol.html">Alcohol</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Dessert'>Dessert</Link>
                        <ul class="sub-menu-box">
                            <li><a href="postre/pastel.html">Pasteles</a></li>
                            <li><a href="postre/pies.html">Pies</a></li>
                            <li><a href="postre/panes.html">Panes</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    <div class="icons">
                        <Link to='/Account'><img src={User} alt=""></img></Link>
                        <Link to="/Cart"><img src={Cart} alt=""></img></Link>
                        <Link href="#!" class="bar"><img src={Menu} alt=""></img></Link>
                    </div>
                </ul>
            </nav>
        </>
    )
}
