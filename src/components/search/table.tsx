import { fetchFilteredKishanData } from "@/lib/data";

export default async function Table({
  query,
  currentPage,
  searching,
}: {
  query: string;
  currentPage: number;
  searching: string;
}) {
  const kishanData = await fetchFilteredKishanData(
    query,
    currentPage,
    searching
  );
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
      <div className="relative flex flex-col font-semibold text-base overflow-y-hidden">
        <div className="min-w-full inline-block align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="sticky top-0 bg-white bg-opacity-50 backdrop-blur-sm">
                {tableHeader.map((header) => (
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-base font-bold text-slate-700 uppercase whitespace-nowrap"
                    key={header}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
