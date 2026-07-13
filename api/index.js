import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_DB)
  .then(() => { console.log("mongodb is connected!") })
  .catch((err) => { console.log(err) })

app.listen(process.env.PORT, () => console.log(`Backend Server is running on PORT ${process.env.PORT}`))