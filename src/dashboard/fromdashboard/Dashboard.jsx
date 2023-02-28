import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col gap-1 w-full p-3 bg-gradient-to-r from-[#9E7676] to-transparent rounded-l-md">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <span>Selamat datang kembali, semoga tugas anda menyenangkan....</span>
      </div>

      <div className="flex gap-5 justify-center w-full h-full">
        <div className="flex flex-col gap-2 shadow-md bg-[#EDDBC7] shadow-slate-200 px-2 py-5 w-[30%] h-[12rem] items-center rounded-lg border-2 border-[#594545]">
          <h2 className="text-2xl font-bold">Total Pengajuan</h2>
          <div className="h-[1px] w-full bg-[#594545]"></div>
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-5xl font-bold">80</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 shadow-md bg-[#EDDBC7] shadow-slate-200 px-2 py-5 w-[30%] h-[12rem] items-center rounded-lg border-2 border-[#594545]">
          <h2 className="text-2xl font-bold">User</h2>
          <div className="h-[1px] w-full bg-[#594545]"></div>
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-5xl font-bold">80</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 shadow-md bg-[#EDDBC7] shadow-slate-200 px-2 py-5 w-[30%] h-[12rem] items-center rounded-lg border-2 border-[#594545]">
          <h2 className="text-2xl font-bold">Admin/Petugas</h2>
          <div className="h-[1px] w-full bg-[#594545]"></div>
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-5xl font-bold">80</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
