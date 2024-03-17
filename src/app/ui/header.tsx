import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[url('/header-bg.svg')]">
      <div className="container mx-auto shadow-xl">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href={"/"} className="flex gap-5 ml-10">
              <Image
                className="rounded-full border-solid border-2 border-green-800 "
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
              <Link
                href={"/login"}
                className="bg-transparent shadow-md hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-5 ml-5"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
