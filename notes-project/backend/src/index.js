import express from "express"
import dotenv from "dotenv"
import routes from "./routes.js"

dotenv.config()
const port = process.env.PORT
const app = express();

app.use(routes)

app.listen(port,()=>{
    console.log(`App listening on: http://localhost/${port}`)
})