import "./App.css";
import { Routes, Route,Outlet } from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
