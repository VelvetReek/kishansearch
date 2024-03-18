const { db } = require("@vercel/postgres");
const kishan_data = require("../src/app/lib/placeholder-data");

async function seed(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS kishan_data (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            date VARCHAR(255),
            card_no VARCHAR(255),
            circle VARCHAR(255),
            village VARCHAR(255),
            name VARCHAR(255),
            through VARCHAR(255),
            variety VARCHAR(255),
            quantity INTEGER
        )
    `;
    console.log("Created table kishan_data");
    // const addConstraint = await client.sql`
    //     ALTER TABLE kishan_data ADD CONSTRAINT unique_card_date UNIQUE(date, card_no);`;
    // console.log("Constraint added successfully");

    // const insertData = await Promise.all(
    //   kishan_data.map(
    //     (data) => client.sql`
    //         INSERT INTO kishan_data (date, card_no, circle, village, name, through, variety, quantity, rate, price)
    //         VALUES (${data.date}, ${data.card_no}, ${data.circle}, ${data.village}, ${data.name}, ${data.through}, ${data.variety}, ${data.quantity}, ${data.rate}, ${data.price})
    //         ON CONFLICT (date, card_no) DO NOTHING`
    //   )
    // );
    // console.log(`Seeded ${insertData.length} rows`);
    return {
      createTable,
      // insertData,
    };
  } catch (error) {
    console.error("Error in seeding", error);
    throw error;
  }
}
async function main() {
  const client = await db.connect();

  await seed(client);

  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
