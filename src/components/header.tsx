import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "../auth";
import DateTime from "./ui/date-time";
import HeaderDropdown from "./ui/header-dropdown";

export default async function Header() {
  const session = await auth();
  return (
    <>
      <header className="max-[768px]:hidden bg-[url('/header-bg.svg')] w-full bg-center bg-no-repeat bg-cover flex mx-auto items-center justify-between h-28">
        <div className="flex items-center">
          <Link href={"/"} className="flex gap-5 ml-10">
            <Image
              className="rounded-full border-solid border-2 border-green-800"
              src="/icon.png"
              alt="Sri Singal Word Center"
              width={70}
              height={70}
            />
            <p className="mt-5 text-2xl font-bold text-gray-600">
              Shri Single Bud Center
            </p>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex items-center gap-3">
              <Link
                href={"/search"}
                className="text-white bg-green-600 shadow-md hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Search
              </Link>
              <Link
                href={"/upload"}
                className="text-white  bg-green-600 shadow-md hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Upload
              </Link>
            </div>
            <div className="flex items-center mb-2">
              {session ? (
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button className="bg-transparent shadow-md hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-5 ml-5">
                    Logout
                  </button>
                </form>
              ) : (
                <Link
                  href={"/login"}
                  className="bg-transparent shadow-md bg-slate-100 hover:bg-green-400 text-grey ring-2 focus:outline-none ring-green-300 rounded mr-5 ml-5 py-2 px-5"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <DateTime />
        </div>
      </header>
      <header className="md:hidden bg-[url('/header-bg.svg')] w-full bg-center bg-no-repeat bg-cover flex mx-auto items-center justify-between h-20">
        <div className="flex items-center">
          <Link href={"/"} className="flex gap-3 ml-3 sm:ml-6">
            <Image
              className="rounded-full border-solid border-2 border-green-800"
              src="/icon.png"
              alt="Sri Singal Word Center"
              width={50}
              height={50}
            />
            <div>
              <p className="text-lg font-bold text-gray-600">
                Shri Single Bud Center
              </p>
              <DateTime />
            </div>
          </Link>
        </div>
        <div className="m-3">
          <HeaderDropdown session={session} signOutLocal={signOutLocal} />
        </div>
      </header>
    </>
  );
}

async function signOutLocal() {
  "use server";
  await signOut();
}
