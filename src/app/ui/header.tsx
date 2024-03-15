import Link from "next/link";
import Image from "next/image";
import icon from "/icon.png";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24 ">
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
                Sri Singal Word Center
              </p>
            </Link>
          </div>
          <div className="flex">
            <div className="flex items-center gap-3">
              <Link
                href={"/search"}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Search
              </Link>
              <Link
                href={"/upload"}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Upload
              </Link>
            </div>
            <div className="flex items-center mb-2">
              <Link
                href={"/login"}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-5 ml-5"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
