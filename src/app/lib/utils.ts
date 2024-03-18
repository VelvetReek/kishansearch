import * as XLSX from "xlsx";

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function excelToJSON(file: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target) {
        const bstr = evt.target.result;
        const workbook = XLSX.read(bstr, { type: "binary" });

        // Convert the first worksheet to JSON, in which first row will be the key and rest will be the value
        const jsonData = XLSX.utils.sheet_to_json(
          workbook.Sheets[workbook.SheetNames[0]]
        );

        // Add a delay before logging the data
        setTimeout(() => {
          console.log(jsonData);
          resolve(jsonData); // Resolve the promise with the jsonData
        }, 5000); // 2000ms = 2 seconds
      }
    };
    reader.onerror = (error) => reject(error); // Reject the promise if there's an error
    reader.readAsBinaryString(file);
  });
}
