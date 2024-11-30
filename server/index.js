import dotenv from "dotenv";
dotenv.config();

import express from "express"
import connectDB from "./src/db/index.js"
import todosRoutes from "./src/routes/todos.routes.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

// middlewire
app.use("/api/v1", todosRoutes)


app.get('/', (req, res) => {
  res.send('Hello faizan!')
})



connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("MONGO DB connection failed !!! ", err);
})


