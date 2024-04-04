import Search from "@/components/search/search";
import Table from "@/components/search/table";
import { fetchMatchedRowCount, fetchTotalRows } from "@/lib/data";
import Pagination from "@/components/search/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    searching?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const searching = searchParams?.searching || "card_no";

  if (query === "")
    return (
      <div className="w-full min-h-screen pt-6 pb-4 bg-[url('/search-bg.svg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="backdrop-blur ml-5 mr-5 md:ml-10 md:mr-10 rounded-xl bg-opacity-30 bg-white">
          <Search placeholder="Search Enteries" />
          <div className="flex flex-col justify-center items-center h-96">
            <h1 className="text-4xl font-bold text-gray-700 max-sm:text-2xl">
              Search for something...
            </h1>
          </div>
        </div>
      </div>
    );

  const matchedRowCount = await fetchMatchedRowCount(query, searching);
  const totalRows = await fetchTotalRows();
  const totalPages = Math.ceil(matchedRowCount / 10);

  return (
    <div className="w-ful min-h-screen pt-6 pb-4 bg-[url('/search-bg.svg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="backdrop-blur-sm ml-5 mr-5 md:ml-10 md:mr-10 rounded-xl bg-opacity-30 bg-white">
        <Search placeholder="Search Enteries" />
        <div className="ml-2 mb-2">
          <p className="text-base text-slate-100 font-semibold">
            Found {matchedRowCount} matching{" "}
            {matchedRowCount > 1 ? `results` : `result`} out of {totalRows}
          </p>
        </div>
        <Table query={query} currentPage={currentPage} searching={searching} />
      </div>
      <div>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
