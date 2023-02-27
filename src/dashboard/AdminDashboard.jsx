import React from "react";
import { Outlet } from "react-router-dom";

// component
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/sidebar/Navbar";

function AdminDashboard() {
  return (
    <div className="flex w-full min-h-[100vh]">
      <Sidebar />

      <div className="flex flex-col gap-2">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
