import './App.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Wish from './pages/Wish';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductScreen from './pages/ProductScreen';
import Shipping from './components/Shipping';
import SignUp from './pages/SignUp'
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import OrderDetails from './components/OrderDetails';
import Account from './components/Account';
import OrderHistory from './components/OrderHistory';
import UserProfile from './components/UserProfile';
import React from 'react';

function App() {
  return (
    <Router>
       <ToastContainer position='bottom-center' limit={1} />
      <div className="App">
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/order/:id' element={<OrderDetails />}/>
          <Route path='/wish' element={<Wish/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/orderhistory' element={<OrderHistory/>}/>
          <Route path='/placeorder' element={<PlaceOrder/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </div>
    </Router>
  );
}

export default App;
