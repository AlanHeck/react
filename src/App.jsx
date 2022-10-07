import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import CartView from './components/CartView';
import CheckOut from './components/CheckOut';
import Footer from './components/footer';
/*import { addDoc, collection } from 'firebase/firestore';
import {useEffect} from 'react'
import { db } from './firebase/Firebase';
import dataProductos from './data/dataProductos';*/



function App() {
/*useEffect (() =>{
const productsCollections = collection(db, "productos")
dataProductos.map((producto)=> addDoc(productsCollections, producto))
},[])*/

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
                <Route path='/checkout' element={<CheckOut />} />
              </Routes>
              <Footer/>

            </div>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
