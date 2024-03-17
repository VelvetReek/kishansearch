import { fetchFilteredKishanData } from "@/app/lib/data";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const kishanData = await fetchFilteredKishanData(query, currentPage);
  return (
    <div className="rounded-xl">
      <div className="flex flex-col font-semibold text-base">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-base font-bold text-slate-700 uppercase"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-base font-bold text-slate-700 uppercase"
                    >
                      Card No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-base font-bold text-slate-700 uppercase"
                    >
                      Circle
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Village
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Through
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Variety
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-base font-bold text-slate-700 uppercase"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {kishanData?.map((data) => (
                    <tr
                      className="hover:bg-gray-100"
                      key={data.date + data.card_no}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-950">
                        {data.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-950 ">
                        {data.card_no}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-950 ">
                        {data.circle}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.village}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.through}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.variety}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.rate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium text-gray-950">
                        {data.price}
                      </td>
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
