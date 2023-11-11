import './footer.css'
import Ig from '../../assets/img/ig.png'
import Face from '../../assets/img/face.png'
import Twitter from '../../assets/img/twitter.png'

export const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-cate">
                    <h2>Coffee Cup</h2>
                    <p>We are an online coffee shop that offers a wide variety of products, taking into account your
                        Quality and delivery.</p>
                    <p> &copf; 2023 Montano Valencia Mike Armando | All Rights Reserved</p>
                    <div class="socials">
                        <a href="https://www.instagram.com/coffeecup_shop/" target="_blank"><img src={Ig} alt=""></img></a>
                        <a href="https://www.facebook.com/profile.php?id=61552221012465&mibextid=9R9pXO" target="_blank"> <img
                            src={Face} alt=""></img></a>
                        <a href="https://twitter.com/CoffeeCupShop" target="_blank"><img src={Twitter} alt=""></img></a>
                    </div>
                </div>
                <div class="footer-cate">
                    <h2>Services</h2>
                    <p>Coffes</p>
                    <p>Quality</p>
                    <p>Delivery</p>
                    <p>Contact</p>
                </div>
                <div class="footer-cate">
                    <h2>Contact</h2>
                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p>+2 392 3929 210</p>
                    <p>coffeecup@gmail.com</p>
                </div>
                <div class="footer-cate">
                    <h2>Terms & Conditions</h2>
                    <p><a href="tyc/tyc.html">Privacy Notice</a></p>
                    <p><a href="#!">Legal Notice</a></p>
                    <p><a href="#!">Terms of Purchase</a></p>
                    <p><a href="#!">Returns</a></p>
                    <p><a href="#!">delivery</a></p>
                    <p><a href="#!">Terms of Service</a></p>
                </div>
            </footer>
        </>
    )
}
