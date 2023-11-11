import './account.css'
// Images
import CoffeeLine from '../../assets/img/line5.png'

export const Account = () => {
    return (
        <>
            <section class="user">
                <div>
                    <h2>Iniciar sesión</h2>
                    <p class="user-enter">Introduce tu email y contraseña</p>
                    <input type="email" placeholder="Email"></input>
                    <input type="text" placeholder="Contraseña"></input>
                    <a href="#!">Iniciar sesión</a>
                    <p class="no-account">No tienes una cuenta? <label for="">Crear una</label></p>
                </div>
                <img src={CoffeeLine} alt=""></img>
            </section>
        </>
    )
}