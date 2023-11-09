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
                <Link to="/">
                    <img src={Logo} alt=""></img>
                </Link>
                <ul class="nav-item-box">
                    <li>
                        <Link href='/coffee-cup'>Home</Link>
                    </li>
                    <li class="nav-items">
                        <a href='cafe/cafe.html'>Coffee</a>
                        <ul class="sub-menu-box">
                            <li><a href="cafe/cafeClasico.html">Hot Coffee</a></li>
                            <li><a href="cafe/cafeAmericano.html">Cold Coffee</a></li>
                            <li><a href="cafe/expresso.html">Expresso</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='frappe/frappe.html'>Frappe</a>
                        <ul class="sub-menu-box">
                            <li><a href="frappe/dulce.html">Frappe de Dulce</a></li>
                            <li><a href="frappe/frutas.html">Frappe de frutas</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='desayuno/desayuno.html'>breakfast</a>
                        <ul class="sub-menu-box">
                            <li><a href="desayuno/sandwich.html">Sandwiches</a></li>
                            <li><a href="desayuno/avenas.html">Avenas</a></li>
                            <li><a href="desayuno/completo.html">Desayuno completo</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='bebidas/bebidas.html'>Drinks</a>
                        <ul class="sub-menu-box">
                            <li><a href="bebidas/jugo.html">Jugos</a></li>
                            <li><a href="bebidas/alcohol.html">Alcohol</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='postre/postre.html'>Dessert</a>
                        <ul class="sub-menu-box">
                            <li><a href="postre/pastel.html">Pasteles</a></li>
                            <li><a href="postre/pies.html">Pies</a></li>
                            <li><a href="postre/panes.html">Panes</a></li>
                        </ul>
                    </li>
                    <div class="icons">
                        <a href="user.html"><img src={User} alt=""></img></a>
                        <a href="#!"><img src={Cart} alt=""></img></a>
                        <a href="#!" class="bar"><img src={Menu} alt=""></img></a>
                    </div>
                </ul>
            </nav>
        </>
    )
}
