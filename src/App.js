import '../src/assets/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Componetns
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
// Pages
import { Home } from '../src/pages/home/home'
import { Coffee } from '../src/pages/coffee/coffee'
import { Cold } from '../src/pages/coffee/cold'
import { Hot } from '../src/pages/coffee/hot'
import { Expresso } from '../src/pages/coffee/expresso'
import { Account } from '../src/pages/account/account'
import { Cart } from '../src/pages/cart/cart'

function App() {
  return (
    <>
      <><Navbar /></>
      <Routes path="/coffee-cup" element={Home}>
        <Route exact path='/coffee-cup' element={<Home />} />
        <Route exact path='/coffee' element={<Coffee />} />
        <Route exact path='/cold' element={<Cold />} />
        <Route exact path='/hot' element={<Hot />} />
        <Route exact path='/expresso' element={<Expresso />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      <><Footer /></>
    </>
  );
}

export default App;
