import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component fromdashboard
import DataAdmin from "./dashboard/fromdashboard/DataAdmin.jsx";
import DataUser from "./dashboard/fromdashboard/DataUser.jsx";
import Dashboard from "./dashboard/fromdashboard/Dashboard.jsx";
import Pengaduan from "./dashboard/fromdashboard/Pengaduan.jsx";
import User from "./dashboard/User.jsx";
import AdminDashboard from "./dashboard/AdminDashboard.jsx";

// page web
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="userdashboard" element={<User />} />
        </Route>
        <Route element={<AdminDashboard />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/pengaduan" element={<Pengaduan />} />
          <Route path="admin/datauser" element={<DataUser />} />
          <Route path="admin/dataadmin" element={<DataAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
