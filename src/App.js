import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <section className="app">
      <ItemListContainer />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
      
  );
}

export default App;
