import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsTrash } from "react-icons/bs";

export default function DeleteModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="flex w-[2rem] h-[2rem] items-center justify-center rounded-full hover:text-white hover:bg-[#594545] duration-300 transition-all"
        >
          <BsTrash className=" text-xl" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-[#F9F5E7] border-[1px] p-5 text-left align-middle shadow-md transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 "
                  >
                    Aju Pengaduan
                  </Dialog.Title> */}

                  <div className="flex items-center justify-center p-5">
                    <span className="font-semibold text-xl">
                      Apakah anda ingin menghapus data ini?
                    </span>
                  </div>

                  <div className="flex gap-5 py-3 items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#A7727D] px-4 py-2 text-sm font-semibold"
                      // text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                      onClick={closeModal}
                    >
                      Batal
                    </button>

                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#A7727D] px-4 py-2 text-sm font-semibold"
                      // text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                      onClick={closeModal}
                    >
                      Hapus!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
