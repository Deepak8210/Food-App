import Home from "./Pages/Home";
import "@splidejs/react-splide/css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuFull from "./Pages/MenuFull";
import Success from "./Pages/Success";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/shop" element={<MenuFull />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
