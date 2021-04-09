import { connectToDatabase } from "../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'
import { predictNotesUrl } from '../../config/index'
import jwt from 'jsonwebtoken'
import axios from "axios";
import Cors from 'cors'
import initMiddleware from '../../middleware/init-middleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  const { db } = await connectToDatabase();

  if (req.method === 'PUT') {
    //TODO check if the object already exists in s3, if so, dont re upload
    const objToSave = {... req.body, created: new Date()}
    const response = await db
    .collection("trackInfo")
    .insertOne(objToSave);
    res.status(201).json(response.insertedId)
  } else if (req.method === 'POST') {
    const trackInfo = {
      key: Object.keys(req.body)[0],
      user: 'Guest'
    }
    const token= jwt.sign({trackInfo}, process.env.AUTH_JWT_SECRET_KEY, {expiresIn: '30s'})
    try {
      const predictNotesRes = await axios({
        method: 'get',
        url: `${predictNotesUrl}/predicted-notes`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      res.status(200).send(predictNotesRes.data)
    } catch (e) {
      console.error(e.response.data)
      res.status(403).send(e.response.data)
    }
  



    // const response = await db
    // .collection("trackInfo")
    // .find({})
    // .toArray();
    // res.status(200).json(response)
  } else {
    res.status(405).send(`Method ${req.method} is not supported by this endpoint.`)
  }
};