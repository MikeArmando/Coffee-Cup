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
                        <h1>Sabor auténtico, momentos inolvidables</h1>
                        <p>Empieza tu dia con café</p>
                        <a href="#about">Explorar</a>
                    </div>
                </section>
            </div>

            <section class="about" id="about">
                <div class="about-img"></div>
                <div class="about-info">
                    <h2>Café de calidad, vida con sabor</h2>
                    <p>Nosotros somos una cafeteria en linea que ofrece una gran variedad de productos, tomando en cuenta su
                        calidad y entrega. El diseno de nuestra pagina esta hecha tomando en cuenta la facilidad para el
                        usuario, si dando un mejr uso. Coffee Cup 10-18-2023 Ensenada B.C calle reforma y calle Blvrd
                        Tecnologico.</p>
                </div>
            </section>

            <section class="offer">
                <div class="offer-intro">
                    <h2>Nuestra Oferta</h2>
                    <img src={BeansLine} alt=""></img>
                    <p>Nosotros brindamos a nuestros clientes una gran variedadd de opciones para el antojo, con la variedad de
                        elegir comer en nuestra tienda fisica o ordenar por linea.
                    </p>
                </div>
                <div class="offer-box">
                    <div class="offer-item-boxes">
                        <img src={CoffeeIcon} alt=""></img>
                        <h3>Tipos de café</h3>
                        <p>Una gran variedad de cafés de todo tipo que se encuentra por el mundo y hecho con la mejor calidad.
                        </p>
                    </div>
                    <div class="offer-item-boxes">
                        <img src={CrosiantIcon} alt=""></img>
                        <h3>Desayunos</h3>
                        <p>Todo tipo de desayunos para poder disfrutar una buena alimentacion por las mañanas con nuestra
                            selección.
                        </p>
                    </div>
                    <div class="offer-item-boxes">
                        <img src={CakeIcon} alt=""></img>
                        <h3>Café & Postre</h3>
                        <p>No solo brindamos varios tipos de cafés si no que tambien traemos una variedad de postres para ir
                            acompañado.
                        </p>
                    </div>
                    <div class="offer-item-boxes">
                        <img src={CoffeeGoIcon} alt=""></img>
                        <h3>Café para llevar </h3>
                        <p>Tenemos en cuenta una buena experiencia para nuestros cliente, por lo que ofrecemos productos para
                            llevar.
                        </p>
                    </div>
                </div>
            </section>

            <section class="questions">
                <h2>FAQ's</h2>
                <img src={BeansLine3} alt=""></img>
                <p>
                    1. ¿Cuáles son sus horas de operación?
                    <br></br>
                    Nuestra cafetería abre todos los días de la semana. Lunes a Viernes:
                    7:00 a.m. - 8:00 p.m. Sábados y Domingos: 8:00 a.m. - 6:00 p.m.
                </p>
                <p>
                    2. ¿Ofrecen opciones de café descafeinado?
                    <br></br>
                    Sí, tenemos café descafeinado disponible en todas nuestras
                    variedades de café.
                </p>
                <p>
                    3. ¿Puedo hacer pedidos para llevar o a domicilio?
                    <br></br>
                    Sí, ofrecemos pedidos para llevar. También puedes
                    realizar pedidos a domicilio a través de nuestra página web o aplicaciones de entrega asociadas.
                </p>
                <p>
                    4. ¿Tienen opciones de café de comercio justo?
                    <br></br>
                    Sí, nos enorgullece ofrecer una selección de café de comercio
                    justo en nuestro menú.
                </p>
                <p>
                    5. ¿Ofrecen opciones de café con leche no láctea?
                    <br></br>
                    Sí, tenemos alternativas de leche no láctea, como leche de
                    almendra, leche de soja y leche de avena, para satisfacer tus preferencias dietéticas.
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