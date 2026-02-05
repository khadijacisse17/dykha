import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import TableauBord from "./pages/tableauBord";
import Hotels from "./pages/Hotels";
import Sidebar from "./components/sidebar";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Routes protégées */}
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <div style={{ display: "flex", minHeight: "100vh" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "20px" }}>
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
