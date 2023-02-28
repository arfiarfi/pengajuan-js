import React from "react";
import ModalLogout from "../modal/ModalLogout";

function Navbar() {
  return (
    <div className="flex items-center justify-end px-5 gap-5 w-full h-[3rem] bg-[#815B5B] shadow">
      <div className="flex bg-white w-[13rem] h-[2rem] items-center p-2 rounded-full">
        <span className="font-medium text-base">name user</span>
      </div>
      <ModalLogout />
    </div>
  );
}

export default Navbar;
