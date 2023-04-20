import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Cart from './components/Cart/Cart';
import Checkout from './components/Chekout/Chekout';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NotificationProvider>
      <CartProvider>
      <Navbar/>
      <section className="app">
      <Routes>
      <Route path="/" element ={<ItemListContainer />}/>
      <Route path="/category/:categoryId" element ={<ItemListContainer />}/>  
      <Route path="/item/itemId" element ={<ItemDetailContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout />}/>
      </Routes>
      </section>
      </CartProvider>
      </NotificationProvider>
      </BrowserRouter>
      <section className="footer">
        <Footer/>
      </section>
    </div>
      
  );
}

export default App;
