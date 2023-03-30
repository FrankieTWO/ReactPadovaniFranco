import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <section className="app">
      <Routes>
      <Route path="/"/>
      <Route path="/category/:categoryId" element ={<ItemListContainer />}/>  
      <Route path="/item/itemId" element ={<ItemDetailContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
      </Routes>
      </section>
      </BrowserRouter>
      <section className="footer">
        <Footer/>
      </section>
    </div>
      
  );
}

export default App;
