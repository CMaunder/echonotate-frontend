import { connectToDatabase } from "../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  if (req.method === 'PUT') {
    const objToSave = {... req.body, created: new Date()}
    const response = await db
    .collection("trackInfo")
    .insertOne(objToSave);
    res.status(201).json(response.insertedId)
  } else if (req.method === 'GET'){
    const response = await db
    .collection("trackInfo")
    .find({})
    .toArray();
    res.status(200).json(response)
  } else {
    res.status(405).send(`Method ${req.method} is not supported by this endpoint.`)
  }
};