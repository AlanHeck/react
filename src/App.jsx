import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
        <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>  
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
