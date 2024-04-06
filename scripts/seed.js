// `npm run seed` to seed the database with placeholder data and creating tables.
const { db } = require("@vercel/postgres");
const bcrypt = require("bcrypt");
const { users } = require("../src/lib/placeholder-data");
// const {kishan_data} = require("../src/app/lib/placeholder-data");
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      // createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedTable(client) {
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

  // await seedTable(client);
  // await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
