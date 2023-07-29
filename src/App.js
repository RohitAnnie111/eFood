
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screening/Home';
import Login from './Screening/Login';
import Signup from './Screening/Signup';



function App() {
  return (
    <>

 
   <BrowserRouter>   
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Login/Signup' element={<Signup/>}/>
  
  </Routes>
</BrowserRouter>


    
    </>
  );
}

export default App;
