import React from "react";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./dashboard/User.jsx";
import AdminDashboard from "./dashboard/AdminDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/register" element={<Register />} />
          {/* <User/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
