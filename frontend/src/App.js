import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/about";
import AddProducto from "./pages/addProducto";
import UpdateProducto from "./pages/updateProducto";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/addproducto" element={<AddProducto />} />
          <Route path="/update/:id" element={<UpdateProducto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
