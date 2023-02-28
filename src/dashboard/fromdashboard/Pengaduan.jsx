import React from "react";
import DeleteModal from "../../components/modal/DeleteModal";
import EditModal from "../../components/modal/EditModal";

function Pengaduan() {
  return (
    <div className="flex flex-col  w-full h-full">
      <h2 className="font-semibold text-xl mb-4 h-[3rem] p-2 bg-gradient-to-r from-[#9E7676] to-transparent rounded-l-md">
        Daftar pengaduan yang di kirim
      </h2>

      <div className="flex flex-col justify-center gap-3 w-full h-full">
        <div className=" border-[1px] border-[#594545]">
          <table className="w-full table-zebra">
            <thead className="text-white text-base  bg-[#815B5B] h-[45px]">
              <tr>
                <th className="border-r-[1px] text-start w-[10%] font-semibold px-2">
                  No.
                </th>
                <th className="border-r-[1px] text-start w-[15%%] font-semibold px-2">
                  Name
                </th>
                <th className="border-r-[1px] text-start w-[30%] font-semibold px-2">
                  Description
                </th>
                <th className="border-r-[1px] text-start w-[30%] font-semibold px-2">
                  Image
                </th>
                <th className=" text-start font-semibold px-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-base h-[45px]">
              <tr>
                <td className="px-2">1</td>
                <td className="px-2">Aku</td>
                <td className="px-2">Developer</td>
                <td className="px-2">img</td>
                <td className=" px-2">
                  {/* <EditModal /> */}
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

export default Pengaduan;
