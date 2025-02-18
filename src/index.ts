import express from 'express'

import { Router, Request, Response } from 'express';
import { appEngineUrl } from './constants/app-url';

import { HumeClient, Hume } from "hume";
const client = new HumeClient({ apiKey: process.env.HUME_API_KEY as string });

const app = express();

const route = Router()

app.use(express.json())

route.get('/check-url', (req: Request, res: Response) => {
  res.json({ message: `Hello from ${appEngineUrl}!` });
})

route.get("/list-webhooks", async (req: Request, res: Response) => {
  const configs = await client.empathicVoice.configs.listConfigs()

  res.json(configs)
});


app.use(route)

app.listen(8080, () => console.log('server running on port 8080'))
