import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"
dotenv.config()

const app = express()
app.use(express.json());

mongoose.connect(process.env.MONGO_DB)
  .then(() => { console.log("mongodb is connected!") })
  .catch((err) => { console.log(err) })

  app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)
app.listen(process.env.PORT, () => console.log(`Backend Server is running on PORT ${process.env.PORT}`))