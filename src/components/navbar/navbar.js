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
                    <li class="nav-items">
                        <a href='cafe/cafe.html'>Café</a>
                        <ul class="sub-menu-box">
                            <li><a href="cafe/cafeClasico.html">Café Clasico</a></li>
                            <li><a href="cafe/cafeAmericano.html">Café Americano</a></li>
                            <li><a href="cafe/expresso.html">Expresso</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='cafeHelado/cafeHelado.html'>Café helado</a>
                        <ul class="sub-menu-box">
                            <li><a href="cafeHelado/latte.html">Latte helado</a></li>
                            <li><a href="cafeHelado/americano.html">Helado Americano</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='capuchino/capuchino.html'>Capuchino</a>
                        <ul class="sub-menu-box">
                            <li><a href="capuchino/clasico.html">Capuchino Clasico</a></li>
                            <li><a href="capuchino/art.html">arte del Capuchino</a></li>
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
                        <a href='cocteles/cocteles.html'>Cócteles de café</a>
                        <ul class="sub-menu-box">
                            <li><a href="cocteles/martini.html">Expresso martini</a></li>
                            <li><a href="cocteles/irlandes.html">Cocteles de café irlandés</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='desayuno/desayuno.html'>Desayunos</a>
                        <ul class="sub-menu-box">
                            <li><a href="desayuno/sandwich.html">Sandwiches</a></li>
                            <li><a href="desayuno/avenas.html">Avenas</a></li>
                            <li><a href="desayuno/completo.html">Desayuno completo</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='batidos/batidos.html'>Batidos</a>
                        <ul class="sub-menu-box">
                            <li><a href="batidos/frutas.html">Batidos de frutas</a></li>
                            <li><a href="batidos/proteina.html">Baditos de proteinas</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='bebidas/bebidas.html'>Bebidas</a>
                        <ul class="sub-menu-box">
                            <li><a href="bebidas/jugo.html">Jugos</a></li>
                            <li><a href="bebidas/alcohol.html">Alcohol</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='botana/botana.html'>Botana</a>
                        <ul class="sub-menu-box">
                            <li><a href="botana/chocolates.html">Dulces</a></li>
                            <li><a href="botana/cacahuates.html">Chips</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='postre/postre.html'>Postre</a>
                        <ul class="sub-menu-box">
                            <li><a href="postre/pastel.html">Pasteles</a></li>
                            <li><a href="postre/pies.html">Pies</a></li>
                            <li><a href="postre/panes.html">Panes</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="icons">
                    <a href="user.html"><img src={User} alt=""></img></a>
                    <a href="#!"><img src={Cart} alt=""></img></a>
                    <a href="#!" class="bar"><img src={Menu} alt=""></img></a>
                </div>
            </nav>
        </>
    )
}
