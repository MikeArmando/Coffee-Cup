import './footer.css'

export const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-cate">
                    <h2>Coffee Cup</h2>
                    <p>Nosotros somos una cafeteria en linea que ofrece una gran variedad de productos, tomando en cuenta su
                        calidad y entrega.</p>
                    <p> &copf; 2023 Montano Valencia Mike Armando | Todos los derechos reservados</p>
                    <div class="socials">
                        <h3>Redes sociales</h3>
                        <a href="https://www.instagram.com/coffeecup_shop/" target="_blank"><img src="img/ig.png" alt=""></img></a>
                        <a href="https://www.facebook.com/profile.php?id=61552221012465&mibextid=9R9pXO" target="_blank"> <img
                            src="img/face.png" alt=""></img></a>
                        <a href="https://twitter.com/CoffeeCupShop" target="_blank"><img src="img/twitter.png" alt=""></img></a>
                    </div>
                </div>
                <div class="footer-cate">
                    <h2>Servicios</h2>
                    <p>Cafes</p>
                    <p>Envio</p>
                    <p>Calidad</p>
                    <p>Desayunos</p>
                </div>
                <div class="footer-cate">
                    <h2>Contacto</h2>
                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p>+2 392 3929 210</p>
                    <p>coffeecup@gmail.com</p>
                </div>
                <div class="footer-cate">
                    <h2>Términos y Condiciones</h2>
                    <p><a href="tyc/tyc.html">Aviso de privacidad</a></p>
                    <p><a href="#!">Aviso legal</a></p>
                    <p><a href="#!">Condiciones de compra</a></p>
                    <p><a href="#!">Devoluciones</a></p>
                    <p><a href="#!">Envios</a></p>
                    <p><a href="#!">Términos de servicio</a></p>
                </div>
            </footer>
        </>
    )
}
