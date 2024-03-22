"use server";

import { sql } from "@vercel/postgres";

export async function addKishanData(kishan_data: any) {
  try {
    const insertData = await Promise.all(
      kishan_data.map(
        (data: any) => sql`
                  INSERT INTO kishan_data (date, card_no, circle, village, name, through, variety, quantity) 
                  VALUES (${data.date}, ${data.card_no}, ${data.circle}, ${data.village}, ${data.name}, ${data.through}, ${data.variety}, ${data.quantity})
                  ON CONFLICT (id) DO NOTHING`
      )
    );
    return insertData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to add kishan data");
  }
}
