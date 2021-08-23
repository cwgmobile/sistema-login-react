import "reflect-metadata";
import express, {Request,Response} from 'express';
import {createConnection, Connection} from "typeorm";
import { TryDBConnect } from "./database";

const app= express();

app.use(express.json());
app.use(async( req: Request, res: Response,next)=>{
    await TryDBConnect(()=>{
    res.json({
      error:"Nao foi possivel conectar ao banco de dados",    
  });
}, next);
});
app.listen(8000, ()=> console.log("servidor rodando na porta 8000"));