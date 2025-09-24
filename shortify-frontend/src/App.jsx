import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // Import useLocation
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import { ToastContainer } from "react-toastify";

function App() {
  // Track token for user authentication
  const [token, setToken] = useState(localStorage.getItem("token"));
  
  // Listen for token changes across tabs (for example, if the user logs out in another tab)
  useEffect(() => {
    const handleStorageChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const location = useLocation(); // Get the current location

  return (
    <>
      <ToastContainer />
      {/* Conditionally render Navigation only if the current route is not the Dashboard */}
      {location.pathname !== "/dashboard" && <Navigation />} 

      <Routes>
        {/* Landing page route */}
        <Route path="/" element={!token ? <LandingPage /> : <Navigate to="/dashboard" />} />

        {/* Authentication Routes */}
        <Route path="/login" element={!token ? <Login onLogin={setToken} /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/dashboard" />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
