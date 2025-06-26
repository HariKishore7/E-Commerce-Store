import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import { useState } from 'react'
import ProductDetails from './pages/ProductDetails'
import { ToastContainer } from 'react-toastify'
import FashionCategory from './pages/FashionCategory'
import Collections from './pages/Collections'

function App() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [search, setSearch] = useState('');
  return (
    <BrowserRouter>
      <NavBar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search}/>}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout setOrderDetails={setOrderDetails} />}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation orderDetails={orderDetails} />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/Category/:name" element={<FashionCategory />}></Route>
        <Route path="/Collections/:name" element={<Collections />}></Route>
      </Routes>
      <Footer />
      <ToastContainer autoClose={1500} closeOnClick={true} />
    </BrowserRouter>
  )
}

export default App
