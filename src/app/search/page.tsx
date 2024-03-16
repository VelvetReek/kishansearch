import Search from "@/app/ui/search/search";
import { Suspense } from "react";
// import { fetchInvoicesPages } from "@/app/data/invoices";
import Table from "@/app/ui/search/table";

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

  // const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="w-full bg-no-repeat bg-cover bg-center bg-[url('/hero_main.jpg')] h-lvh pt-6">
      <div className="backdrop-blur-sm ml-10 mr-10 rounded-xl">
        <div className="flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search Enteries" />
        </div>
        <Table query={query} currentPage={currentPage} />
      </div>
    </div>
  );
}
