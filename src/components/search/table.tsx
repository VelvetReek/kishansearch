import { fetchFilteredKishanData } from "@/lib/data";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const kishanData = await fetchFilteredKishanData(query, currentPage);
  const tableHeader = [
    "Date",
    "Card No.",
    "Circle",
    "Village",
    "Name",
    "Through",
    "Variety",
    "Quantity",
  ];
  if (kishanData.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <h1 className="text-4xl font-bold text-gray-700">No Data Found</h1>
      </div>
    );
  }
  return (
    <div className="rounded-xl">
      <div className="flex flex-col font-semibold text-base">
        <div className="-m-1.5">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="relative">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="sticky top-0 bg-white bg-opacity-50 backdrop-blur-sm">
                    {tableHeader.map((header) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-base font-bold text-slate-700 uppercase"
                        key={header}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {kishanData?.map((data) => (
                    <tr className="hover:bg-gray-100" key={data.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950">
                        {data.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950 ">
                        {data.card_no}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950 ">
                        {data.circle}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950">
                        {data.village}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950">
                        {data.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950">
                        {data.through}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950">
                        {data.variety}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-950">
                        {data.quantity}
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.rate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.price}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
