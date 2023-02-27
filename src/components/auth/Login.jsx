import React from "react";
import { Link } from "react-router-dom";

// icons
import { MdAlternateEmail, MdLock } from "react-icons/md";
import Register from "./Register";

export default function Login() {
  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <div className="bg-[#F9F5E7] w-[26rem] h-[40rem] shadow-md shadow-gray-300 rounded-sm p-5 flex flex-col gap-10 text-center">
        <div>
          <h2 className="text-[2rem] font-bold">Sign In</h2>
          <p className="text-sm mt-2">Hallo selamat datang kembali </p>
        </div>

        <div className="flex flex-col py-3 gap-4">
          <div className="flex w-full h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdAlternateEmail className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="email"
              placeholder="Masukan email"
            />
          </div>
          <div className="flex w-full  h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdLock className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="email"
              placeholder="Masukan password"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <button className="flex w-[15rem] h-[2.5rem] px-8 gap-5 items-center justify-center font-bold rounded-full bg-[#A7727D] ">
            Sign In
          </button>
          <p className="text-sm">
            Mungkin anda belum mempunyai akun?
            <Link to="/register">
              <span className="font-semibold text-sm"> Register!</span>{" "}
            </Link>
          </p>{" "}
          <p className="font-semibold text-sm">Lupa password?</p>
        </div>
      </div>
    </div>
  );
}
