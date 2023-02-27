import React from "react";

// icons
import { MdDashboard, MdEmail } from "react-icons/md";
import { RiAdminFill, RiUserSearchFill, RiLogoutBoxFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-[#E5E5CB] shadow-md w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold">Pemakat</h2>
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdDashboard className="text-2xl" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdEmail className="text-2xl" />
                  <span>Pengaduan</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <RiUserSearchFill className="text-2xl" />
                  <span>Data User</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <RiAdminFill className="text-2xl" />
                  <span>Data Admin</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <RiLogoutBoxFill className="text-2xl" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
