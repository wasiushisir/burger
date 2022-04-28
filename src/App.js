
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import BurgerHut from './Components/BurgerHut/BurgerHut';
import BurgerDetail from './Components/BurgerDetail/BurgerDetail';
import AddBurger from './Components/AddBurger/AddBurger';
import ManageBurger from './Components/ManageBurger/ManageBurger';
import Checkout from './Components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import Order from './Components/Order/Order';


function App() {
  return (
    <div >
      
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/burgers' element={<BurgerHut></BurgerHut>}></Route>
        <Route path='/burger/:burgerId' element={<BurgerDetail></BurgerDetail>}></Route>
        <Route path='/addBurger' element={<AddBurger></AddBurger>}></Route>
        <Route path='/manageBurger' element={<ManageBurger></ManageBurger>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/checkout/:burgerId' element={<Checkout></Checkout>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>

      </Routes>
      <ToastContainer />


      
      
     
    </div>
  );
}

export default App;
