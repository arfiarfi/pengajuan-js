import React from "react";

// component
import Modal from "../components/modal/Modal.jsx";
import ModalLog from "../components/modal/ModalLogout.jsx";

const User = (isOpen, setIsOpen) => {
  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="bg-[#F9F5E7] w-full min-h-[100vh] gap-5 rounded-sm shadow-md shadow-gray-300 flex flex-col p-3">
        {/* Top Bar */}
        <div className="h-[4rem] w-full rounded-lg bg-[#A7727D] flex items-center px-8 justify-between  border-[1px] border-[#EDDBC7] shadow-md">
          <div className="flex gap-5 items-center">
            <h2 className="font-bold text-3xl text-center">Lapamas</h2>
          </div>

          <div className="flex gap-4">
            <div className="flex w-[14rem] text-sm h-[2.3rem] px-2 items-center rounded-md bg-[#F9F5E7] border-[1px] border-[#EDDBC7] ">
              <span>Name Email</span>
            </div>

            <ModalLog />
          </div>
        </div>

        <Modal />

        <div className="flex flex-wrap gap-3 max-w-full min-h-full content-start justify-center">
          <div className="flex flex-col gap-2 bg-[#F8EAD8] rounded-md max-w-[30vw] p-2 ">
            <span className="font-semibold text-base">name</span>

            <div className="flex flex-col gap-1 bg-[#F9F5E7] rounded p-2">
              <span className="font-semibold text-base">deskripsi</span>
              <p className="text-sm">
                Twin world developers created immersive virtual environtment for
                socializing, gaming, and commerce specialize in niche or unique
                virtual space
              </p>
            </div>

            <img className="w-full" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
