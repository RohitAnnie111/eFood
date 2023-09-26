import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screening/Home";
import Login from "./Screening/Login";
import Signup from "./Screening/Signup";
import { CartProvier } from "./Components/ContextReducer";

function App() {
  return (
    <>
      <CartProvier>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartProvier>
    </>
  );
}

export default App;
