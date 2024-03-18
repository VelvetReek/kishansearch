import Search from "@/app/ui/search/search";
import Table from "@/app/ui/search/table";
import { fetchKishanDataPages } from "../lib/data";
import Pagination from "../ui/search/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  if (query === "")
    return (
      <div className="w-full min-h-screen pt-4 pb-4 bg-[url('/search-bg.svg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="backdrop-blur ml-10 mr-10 rounded-xl bg-opacity-30 bg-white">
          <div className="flex items-center justify-between gap-2 ">
            <Search placeholder="Search Enteries" />
          </div>
          <div className="flex justify-center items-center h-96">
            <h1 className="text-4xl font-bold text-gray-700">
              Search with Grower Code
            </h1>
          </div>
        </div>
      </div>
    );

  const totalPages = await fetchKishanDataPages(query);
  return (
    <div className="w-ful min-h-screen pt-4 pb-4 bg-[url('/search-bg.svg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="backdrop-blur-sm ml-10 mr-10 rounded-xl bg-opacity-30 bg-white">
        <div className="flex items-center justify-between gap-">
          <Search placeholder="Search Enteries" />
        </div>
        <Table query={query} currentPage={currentPage} />
      </div>
      <div>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
