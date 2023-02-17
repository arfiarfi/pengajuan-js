import React from "react";
// import { BiDotsVerticalRounded, BiPlusCircle } from "react-icons/bi";
import Modal from "../components/modal/Modal.jsx";
import ModalLog from "../components/modal/ModalLogout.jsx";

const User = (isOpen, setIsOpen) => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="bg-[#F9F5E7] w-full h-full rounded-sm shadow-md shadow-gray-300 flex flex-col p-5">
        {/* Top Bar */}
        <div className="h-[4rem] w-full rounded-lg bg-[#A7727D] flex items-center px-8 justify-between  border-[1px] border-[#EDDBC7] shadow-md">
          <div className="flex gap-5 items-center">
            {/* <Modal /> */}
            <h2 className="font-bold text-3xl text-center">Pemakat</h2>
          </div>

          <div className="flex gap-4">
            <div className="flex w-[14rem] text-sm h-[2.3rem] px-2 items-center rounded-md bg-[#F9F5E7] border-[1px] border-[#EDDBC7] ">
              <span>Name Email</span>
            </div>

            {/* <ModalLog /> */}
          </div>
        </div>

        {/* Card */}
        <div></div>
      </div>
    </div>
  );
};

export default User;
