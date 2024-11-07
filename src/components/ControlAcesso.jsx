// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Navigate,
//   Routes,
// } from "react-router-dom";
// import Register from "../components/Register";
// import Login from "../components/Login";
// import HomePage from "../pages/homePage"; // Componente de la página principal
// import About from "../components/about";
// import AddProducto from "../pages/addProducto";
// import UpdateProducto from "../pages/updateProducto";

// const AuthRouter = () => {
//   const isAuthenticated = !!localStorage.getItem("authToken"); // Verifica si hay un token

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         {!isAuthenticated ? (
//           <>
//             <Route path="/addproducto" element={<AddProducto />} />
//             <Route path="/update/:id" element={<UpdateProducto />} />
//             <Route path="/about" element={<About />} />
//           </>
//         ) : (
//           <>
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default AuthRouter;
