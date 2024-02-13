import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Product from './Components/Product';
import { useState } from 'react';
import Cardlisting from './Components/Cardlisting';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';


function App() {
  const [arr, setarr] = useState([])
  const [cart, setcart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status

  const addtocart = (data) =>{
    setcart([...cart ,{...data, quantity : 1}])
  }
    const handleShow = (value) => {
    setShowCart(value)
    }

    
return (
    <>
     <BrowserRouter>
     <Header count ={cart.length} handleShow={handleShow}/>
      <Routes>
        <Route path='/' exact element = { <Navigate to ='/product'/> } />
        <Route path='/Product' exact element={ <Product setarr = {setarr} arr={arr} addtocart={addtocart} /> } />
        <>
         <Route path='/Cardlisting' exact element={<Cardlisting cart = {cart}/>} />
         <Route path='/login' element={<Login  />}/>
         <Route path='/SignUp' element={<SignUp/>}/>
        </>
      </Routes>
    </BrowserRouter>


    {/* <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
      </Router>
    </div> */}
</>
  );
}
export default App;