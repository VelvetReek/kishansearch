import { sql } from "@vercel/postgres";
import { kishanDataTable, kishan_data } from "./definitions";

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredKishanData(
  query: string,
  currentPage: number
) {
  try {
    const data = await sql<kishanDataTable>`
    SELECT * FROM kishan_data 
    WHERE
        kishan_data.card_no ILIKE ${`%${query}%`} 
        ORDER BY kishan_data.date DESC
        OFFSET ${(currentPage - 1) * ITEMS_PER_PAGE}
        LIMIT ${ITEMS_PER_PAGE}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch kishan data");
  }
}
