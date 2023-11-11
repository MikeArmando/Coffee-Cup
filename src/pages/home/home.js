import './home.css'
import { Link } from 'react-router-dom'
// Images
import CoffeeIcon from '../../assets/img/coffeeC.png'
import CrosiantIcon from '../../assets/img/crosiant.png'
import CakeIcon from '../../assets/img/cake.png'
import CoffeeGoIcon from '../../assets/img/Go.png'
import BeansLine from '../../assets/img/line.png'
import BeansLine3 from '../../assets/img/line3.png'

export const Home = () => {
    return (
        <>
            <div className='hero-background'>
                <section class="hero">
                    <div>
                        <h1>Coffee Cup</h1>
                        <p>Start your day with coffee</p>
                        <a href="#about">View More</a>
                    </div>
                </section>
            </div>

            <section class="about" id="about">
                <div class="about-img"></div>
                <div class="about-info">
                    <h2>Quality Coffee, Life with Flavor</h2>
                    <p>We are an online coffee shop that offers a wide variety of products, taking into account your
                        Quality and delivery. The design of our website is made taking into account the ease of use of the
                        user, if giving a better use. Coffee Cup 10-18-2023 Ensenada B.C Reforma Street & Blvrd Street
                        Technological.</p>
                </div>
            </section>

            <section class="offer">
                <div class="offer-intro">
                    <h2>Our Offer</h2>
                    <img src={BeansLine} alt=""></img>
                    <p>We provide our customers with a wide variety of options for the craving, with the variety of
                        Choose to eat in our physical store or order online.
                    </p>
                </div>
                <div class="offer-box">
                    <div class="offer-item-boxes">
                        <img src={CoffeeIcon} alt=""></img>
                        <h3>Types of Coffee</h3>
                        <p>A wide variety of coffees of all kinds found all over the world and made with the best quality.
                        </p>
                    </div>
                    <div class="offer-item-boxes">
                        <img src={CrosiantIcon} alt=""></img>
                        <h3>Breakfast</h3>
                        <p>All kinds of breakfasts to be able to enjoy a good diet in the mornings with our selection.
                        </p>
                    </div>
                    <div class="offer-item-boxes">
                        <img src={CakeIcon} alt=""></img>
                        <h3>Desserts</h3>
                        <p>Not only do we provide various types of coffees but we also bring a variety of desserts to go accompanied.
                        </p>
                    </div>
                    <div class="offer-item-boxes">
                        <img src={CoffeeGoIcon} alt=""></img>
                        <h3>Coffee to go</h3>
                        <p>We keep in mind a good experience for our customers, so we offer products for
                            delivery.</p>
                    </div>
                </div>
            </section>

            <section class="questions">
                <h2>FAQ's</h2>
                <img src={BeansLine3} alt=""></img>
                <p>
                    1. What are your hours of operation?
                    <br></br>
                    Our cafeteria is open every day of the week. Monday to Friday:
                    7:00 a.m. - 8:00 p.m. Saturday & Sunday: 8:00 a.m. - 6:00 p.m.
                </p>
                <p>
                    2. Do you offer decaffeinated coffee options?
                    <br></br>
                    Yes, we have decaffeinated coffee available in all of our stores.
                    varieties of coffee.
                </p>
                <p>
                    3. Can I order delivery?
                    <br></br>
                    Yes, we offer takeout orders. You can also
                    Place home orders through our website or partner delivery apps.
                </p>
                <p>
                    4. Do you have fair trade coffee options?
                    <br></br>
                    Yes, we are proud to offer a selection of commercial coffee
                    right on our menu.
                </p>
                <p>
                    5. Do you offer non-dairy latte options?
                    <br></br>
                    Yes, we do have non-dairy milk alternatives, such as milk from
                    almond, soy milk and oat milk, to suit your dietary preferences.
                </p>
            </section>

            <section class="gallary">
                <div class="gallary-box">
                    <div class="gallary-item1"></div>
                    <div class="gallary-item2"></div>
                    <div class="gallary-item3"></div>
                    <div class="gallary-item4"></div>
                    <div class="gallary-item5"></div>
                    <div class="gallary-item6"></div>
                </div>
            </section>
        </>
    )
}