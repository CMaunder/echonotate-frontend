import { connectToDatabase } from "../../middleware/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const users = await db
    .collection("users")
    .find({})
    .toArray();

  res.json(users);
};