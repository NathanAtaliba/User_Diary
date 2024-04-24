import express from "express";
import dotenv from "dotenv";
import routes from "./routes.js";
import DatabaseConnection from "./database/db.js";
import cors from 'cors';
dotenv.config()
const port = process.env.PORT
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(cors());

app.use(express.json());

app.use(routes)


DatabaseConnection()
.then(()=>{
    app.listen(port, () => { console.log(`App rodando na url http://localhost:${port}/`);
    })
})
.catch(error =>{ console.log('Erro:', error);
});