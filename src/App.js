import '../src/assets/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Componetns
import { Navbar } from './components/navbar/navbar'
import { Footer } from './components/footer/footer'
// Pages
import { Home } from '../src/pages/home/home'
import { Coffee } from '../src/pages/coffee/coffee'
import { Account } from '../src/pages/account/account'
import { Cart } from '../src/pages/cart/cart'

function App() {
  return (
    <>
      <><Navbar /></>
      <Routes path="/coffee-cup" element={Home}>
        <Route exact path='/coffee-cup' element={<Home />} />
        <Route exact path='/Coffee' element={<Coffee />} />
        <Route exact path='/Account' element={<Account />} />
        <Route exact path='/Cart' element={<Cart />} />
      </Routes>
      <><Footer /></>
    </>
  );
}

export default App;
