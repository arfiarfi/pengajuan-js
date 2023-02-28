import React from "react";
import AddAdminUser from "../../components/modal/AddAdminUser";
import DeleteModal from "../../components/modal/DeleteModal";
import BsTrash from "../../components/modal/DeleteModal";
import EditModal from "../../components/modal/EditModal";

function DataAdmin() {
  return (
    <div className="flex flex-col  w-full h-full">
      <h2 className="font-semibold text-xl mb-3 h-[3rem] p-2 bg-gradient-to-r from-[#9E7676] to-transparent rounded-l-md">
        Daftar admin petugas
      </h2>

      <AddAdminUser />

      <div className="flex flex-col justify-center gap-3 w-full h-full">
        <div className=" border-[1px] border-[#594545]">
          <table className="w-full table-zebra">
            <thead className="text-white text-base  bg-[#815B5B] h-[45px]">
              <tr>
                <th className="border-r-[1px] text-start w-[10%] font-semibold px-2">
                  No.
                </th>
                <th className="border-r-[1px] text-start w-[35%] font-semibold px-2">
                  Admin
                </th>
                <th className="border-r-[1px] text-start w-[35%] font-semibold px-2">
                  No.Phone
                </th>
                <th className=" text-start font-semibold px-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-base h-[45px]">
              <tr>
                <td className="px-2">1</td>
                <td className="px-2">Aku</td>
                <td className="px-2">Developer</td>
                <td className="flex gap-2 items-center justify-center p-2">
                  <EditModal />
                  <DeleteModal />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataAdmin;
