import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const port = process.env.PORT

const app = express();

connectDB();

app.listen(port, () => console.log(`Server started at port ${port}`));