import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import CartView from './components/CartView';
import EndBuy from './components/EndBuy';




function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <div className="App">

              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:categoria' element={<ItemListContainer />} />
                <Route path='/detalles/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartView />} />
                <Route path='/endBuy' element={<EndBuy />} />
              </Routes>

            </div>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
