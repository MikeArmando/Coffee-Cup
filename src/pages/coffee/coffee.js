import './coffee.css'

// Images
import coffee1 from '../../assets/img/coffee/coffeeMain (1).png'
import coffee2 from '../../assets/img/coffee/coffeeMain (2).png'
import coffee3 from '../../assets/img/coffee/coffeeMain (3).png'
import coffee4 from '../../assets/img/coffee/coffeeMain (4).png'

export const Coffee = () => {
    return (
        <>
            <div class="hero-background-cafe">
                <div class="background-dark">
                    <section class="hero">
                        <div>
                            <h2>Coffee</h2>
                        </div>
                        <img class="down" src="../img/down.png" alt=""></img>
                    </section>
                </div>
            </div>

            <section className='Offer'>
                <h2>The Best Coffee</h2>
            </section>

            <section className='Offer-img'>
                <div></div>
                <div></div>
            </section>

            <section class="pro-main">
                <h2>Our Specials</h2>
                <div class="pro-main-box">
                    <a href="#!">
                        <img src={coffee1} alt=""></img>
                        <p>Classic vanilla coffee</p>
                    </a>
                    <a href="#!">
                        <img src={coffee2} alt=""></img>
                        <p>Classic vanilla coffee</p>
                    </a>
                    <a href="#!">
                        <img src={coffee3} alt=""></img>
                        <p>Classic vanilla coffee</p>
                    </a>
                    <a href="#!">
                        <img src={coffee4} alt=""></img>
                        <p>Classic vanilla coffee</p>
                    </a>
                </div>
            </section>

            <section className='more'>
                <h2>More Coffe</h2>
                <div className='more-img'>
                    <div className='more-img1'></div>
                    <div className='more-img2'></div>
                    <div className='more-img3'></div>
                </div>
            </section>
        </>
    )
}

