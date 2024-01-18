import express, { Express, Request, Response } from "express"
import dotenv from "dotenv";

dotenv.config();
  
const app: Express = express(); 
const PORT = process.env.PORT || 3000; 




app.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.send("Welcome to chili's, I'll be your server");
});
  
app.listen(PORT, () => { 
    console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    } 
); 