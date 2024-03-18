import { sql } from "@vercel/postgres";
import { kishanDataTable } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredKishanData(
  query: string,
  currentPage: number
) {
  // noStore();
  try {
    const data = await sql<kishanDataTable>`
    SELECT * FROM kishan_data 
    WHERE
        kishan_data.card_no ILIKE ${`%${query}%`} 
        ORDER BY (kishan_data.date, kishan_data.card_no) DESC
        OFFSET ${(currentPage - 1) * ITEMS_PER_PAGE}
        LIMIT ${ITEMS_PER_PAGE}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch kishan data");
  }
}

export async function fetchKishanDataPages(query: string) {
  // noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM kishan_data
    WHERE
      kishan_data.card_no ILIKE ${`%${query}%`}`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (err) {
    console.error("Database Error: ", err);
    throw new Error("Failed to fetch total number of Data");
  }
}
