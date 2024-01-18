import express, { Express, Request, Response } from "express"
import db from './db'
import dotenv from "dotenv";
dotenv.config();
  
const app: Express = express(); 
const PORT = process.env.PORT || 3000; 


app.get('/users', async (req: Request, res: Response) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
});


app.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.send("Welcome to chili's, I'll be your server");
});
  
app.listen(PORT, () => { 
    console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    } 
); 