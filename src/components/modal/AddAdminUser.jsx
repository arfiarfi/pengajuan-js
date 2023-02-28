import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// icons
import { BiPlusCircle } from "react-icons/bi";

export default function AddAdminUser() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="flex gap-2 text-center items-center p-1 mb-4 w-[15rem] hover:pl-5 hover:bg-gradient-to-r from-[#9E7676] to-transparent hover:duration-300 transition-all rounded-l-full"
        >
          <BiPlusCircle className="text-[1.5rem]" />
          <span className="font-medium">Add account</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
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
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 "
                  >
                    Membuat akun baru
                  </Dialog.Title>

                  <form className="flex flex-col items-center p-3 gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-base font-semibold">Frist Name</p>
                      <input
                        className="outline-none w-full rounded-md px-2 h-[2.5rem]"
                        placeholder="Masukan nama depan..."
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-base font-semibold">Last Name</p>
                      <textarea
                        className="outline-none w-full rounded-md p-2 h-[2.5rem] min-h-[2.5rem]"
                        placeholder="Masukan nama belakang..."
                        type="textarea"
                      />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-base font-semibold">Password</p>
                      <input
                        className="outline-none w-full rounded-md px-2 h-[2.5rem]"
                        placeholder="Masukan password..."
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-base font-semibold">No. phone</p>
                      <input
                        className="outline-none w-full rounded-md px-2 h-[2.5rem]"
                        placeholder="Masukan no.telepon..."
                        type="text"
                      />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-base font-semibold">Role</p>
                      <input
                        className="outline-none w-full rounded-md px-2 h-[2.5rem]"
                        placeholder="Masukan nama..."
                        type="text"
                      />
                    </div>
                  </form>

                  <div className="flex gap-5 px-3">
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
                      onClick={""}
                    >
                      Buat akun!
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
