import React from "react";
import {
  MdAlternateEmail,
  MdLock,
  MdDriveFileRenameOutline,
  MdPhoneAndroid,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Register() {
  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <div className="bg-[#F9F5E7] w-[26rem] h-[40rem] shadow-md shadow-gray-300 rounded-sm p-5 flex flex-col gap-10 text-center">
        <div>
          <h2 className="text-[2rem] font-bold">Register</h2>
          <p className="text-sm mt-2">Hallo selamat bergabung dengan kami</p>
        </div>

        <div className="flex flex-col py-3 gap-4">
          <div className="flex w-full h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdDriveFileRenameOutline className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex w-full  h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdDriveFileRenameOutline className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>{" "}
          <div className="flex w-full  h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdAlternateEmail className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="email"
              placeholder="Email"
              required
            />
          </div>{" "}
          <div className="flex w-full  h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdLock className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>{" "}
          <div className="flex w-full  h-[2.5rem] px-8 gap-5 items-center rounded-full bg-white border-[1px] border-[#A7727D]">
            <MdPhoneAndroid className="text-2xl" />
            <input
              className="w-full h-[2rem] outline-none"
              type="tel"
              //   pattern="\(\d\d\d\d)-\d\d\d\d\d\d\d\d."
              placeholder="Number Phone"
              required
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <button className="flex w-[15rem] h-[2.5rem] px-8 gap-5 items-center justify-center font-bold rounded-full bg-[#A7727D] ">
            Register
          </button>
          <p className="text-sm">
            Mungkin anda sudah mempunyai akun?
            <Link to="/">
              <span className="font-semibold text-sm"> Sign In!</span>{" "}
            </Link>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
