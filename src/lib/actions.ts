"use server";

import { sql } from "@vercel/postgres";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
