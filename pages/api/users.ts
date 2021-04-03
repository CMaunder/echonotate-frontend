import { connectToDatabase } from "../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();

  const users = await db
    .collection("users")
    .find({})
    .toArray();

  res.json(users);
};