import { connectToDatabase } from "../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'
import { predictNotesUrl } from '../../config/index'
import jwt from 'jsonwebtoken'
import axios from "axios";
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  const { db } = await connectToDatabase();
  res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

  if (req.method === 'PUT') {
    const objToSave = {... req.body, created: new Date()}
    const response = await db
    .collection("trackInfo")
    .insertOne(objToSave);
    res.status(201).json(response.insertedId)
  } else if (req.method === 'GET') {
    //console.log(req.body)
    // if the track is uploaded to s3, get the predicted notes
    const trackInfo = {
      key: 'c-major-scale.mp3',
      user: 'Guest'
    }
    const token= jwt.sign({trackInfo}, 'charliesSecretKey', {expiresIn: '60s'})
    const predictNotesRes = await axios({
      method: 'get',
      url: `${predictNotesUrl}/predicted-notes`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    res.status(200).send(predictNotesRes.data)



    // const response = await db
    // .collection("trackInfo")
    // .find({})
    // .toArray();
    // res.status(200).json(response)
  } else {
    res.status(405).send(`Method ${req.method} is not supported by this endpoint.`)
  }
};