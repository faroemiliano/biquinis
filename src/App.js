import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from "./pages/homePage"; // Componente de la página principal
import About from "./components/about";
import AddProducto from "./pages/addProducto";
import UpdateProducto from "./pages/updateProducto";
import Navbar from "./components/Navbar";
import { useAuth } from "./components/AuthContext";
import Footer from "./components/Footer";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {isAuthenticated ? (
            <>
              <Route path="/addproducto" element={<AddProducto />} />
              <Route path="/update/:id" element={<UpdateProducto />} />
            </>
          ) : (
            // Si no está autenticado y trata de acceder a rutas protegidas, redirigir al login
            <>
              <Route
                path="/addproducto"
                element={<Navigate to="/login" replace />}
              />
              <Route
                path="/update/:id"
                element={<Navigate to="/login" replace />}
              />
            </>
          )}

          {/* Redireccionar cualquier ruta desconocida a la página principal */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
