export type kishanDataTable = {
  id: string;
  date: string;
  card_no: string;
  circle: string;
  village: string;
  name: string;
  through: string;
  variety: string;
  quantity: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const headingFormat = {
  date: "Date",
  card_no: "Card No.",
  circle: "Circle",
  village: "Village",
  name: "Name",
  through: "Through",
  variety: "Variety",
  quantity: "Quantity",
};
