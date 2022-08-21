import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Heck Burgers</h1>
      <ItemListContainer contenedor='Lista contenedora'/>  
    </div>
  );
}

export default App;
