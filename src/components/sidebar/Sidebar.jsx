import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import { MdDashboard, MdEmail } from "react-icons/md";
import { RiAdminFill, RiUserSearchFill, RiLogoutBoxFill } from "react-icons/ri";
import ModalLogout from "../modal/ModalLogout";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex shadow-md">
      <div className="flex flex-col h-screen p-3 bg-[#594545] shadow-md w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-[#FFF8EA]">Lapamas</h2>
          </div>

          <div className="flex-1">
            <ul className="p-3 space-y-1 text-base text-[#FFF8EA]">
              <li className="rounded-sm">
                <a
                  onClick={() => navigate("admin/dashboard")}
                  className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:ml-5 duration-300 "
                >
                  <MdDashboard className="text-2xl" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  onClick={() => navigate("admin/pengaduan")}
                  className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:ml-5 duration-300"
                >
                  <MdEmail className="text-2xl" />
                  <span>Pengaduan</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  onClick={() => navigate("admin/datauser")}
                  className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:ml-5 duration-300"
                >
                  <RiUserSearchFill className="text-2xl" />
                  <span>Data User</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  onClick={() => navigate("admin/dataadmin")}
                  className="flex items-center p-2 space-x-3 rounded-md cursor-pointer hover:ml-5 duration-300"
                >
                  <RiAdminFill className="text-2xl" />
                  <span>Data Admin</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a className="flex items-center p-2 space-x-3 rounded-md hover:ml-5 duration-300">
                  {/* <RiLogoutBoxFill className="text-2xl" />
                  <span>Logout</span> */}
                  <ModalLogout />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
