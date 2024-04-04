import { db, sql } from "@vercel/postgres";
import { kishanDataTable } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredKishanData(
  query: string,
  currentPage: number,
  searching: string
) {
  noStore();
  const client = await db.connect();
  try {
    const sqlQuery = `SELECT * FROM kishan_data 
    WHERE 
      kishan_data.${searching} ILIKE $1 
      ORDER BY (kishan_data.date, kishan_data.card_no) 
      DESC OFFSET $2 LIMIT $3`;
    const values = [
      `%${query}%`,
      (currentPage - 1) * ITEMS_PER_PAGE,
      ITEMS_PER_PAGE,
    ]; // Pass the value as an array

    const data = await client.query<kishanDataTable>(sqlQuery, values); // Provide the values array
    // const data = await sql<kishanDataTable>`
    // SELECT * FROM kishan_data
    // WHERE
    //   kishan_data.card_no ILIKE ${`%${query}%`}
    //   ORDER BY (kishan_data.date, kishan_data.card_no) DESC
    //   OFFSET ${(currentPage - 1) * ITEMS_PER_PAGE}
    //   LIMIT ${ITEMS_PER_PAGE}
    // `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch kishan data");
  } finally {
    client.release();
  }
}

export async function fetchMatchedRowCount(query: string, searching: string) {
  noStore();
  const client = await db.connect();
  try {
    const sqlQuery = `SELECT COUNT(*) FROM kishan_data 
    WHERE 
      kishan_data.${searching} ILIKE $1`;
    const values = [`%${query}%`]; // Pass the value as an array

    const count = await client.query(sqlQuery, values); // Provide the values array

    const matchedRowCount = Number(count.rows[0].count);
    return matchedRowCount;
  } catch (err) {
    console.error("Database Error: ", err);
    throw new Error("Failed to fetch total number of Data");
  } finally {
    client.release();
  }
}
// try {
//   const count = await sql`SELECT COUNT(*)
//   FROM kishan_data
//   WHERE
//     kishan_data.card_no ILIKE ${`%${query}%`}`;

//   const matchedRowCount = Number(count.rows[0].count);
//   return matchedRowCount;
// } catch (err) {
//   console.error("Database Error: ", err);
//   throw new Error("Failed to fetch total number of Data");
// }

export async function fetchTotalRows() {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*) FROM kishan_data`;
    const totalRows = Number(count.rows[0].count);
    return totalRows;
  } catch (err) {
    console.error("Database Error: ", err);
    throw new Error("Failed to fetch total number of Data");
  }
}
