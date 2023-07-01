import express from "express"
import { onRequest } from "firebase-functions/v2/https";
import cors from "cors"
import {  getCandy, addNewCandy  } from "./src/candy.js"

const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get("/candy", getCandy)
app.post("/candy", addNewCandy)
//app.listen(PORT, () => {
  //  console.log(`Listening on http://localhost:${PORT}...`)
// })

export const api = onRequest(app);