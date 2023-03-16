import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './fonts/Cyberpunk.ttf';
import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={'Welcome to Arasaka Corp'}/>
      </div>
      
  );
}

export default App;
