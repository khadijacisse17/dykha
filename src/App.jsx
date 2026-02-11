import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import TableauBord from "./pages/TableauBord";
import Hotels from "./pages/Hotels";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Vérifie si l'utilisateur est déjà logué via localStorage
  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(logged);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />

        {/* Pages protégées */}
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <div className="app-container">
                <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
                <div className="main-content">
                  <Routes>
                    <Route path="/" element={<TableauBord />} />
                    <Route path="hotels" element={<Hotels />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
