import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Pizza from "./pages/Pizza/Pizza";
import Home from "./pages/Home/Home";
import NoFound from "./components/NoFound/NoFound";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

import { ContextUser } from "./Context/UserContext";

function App() {
  const { user } = useContext(ContextUser);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route
          path="/register"
          element={user === false ? <Register /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={user === false ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="volver" element={<Home />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
