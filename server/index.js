import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import path from "path";
import { fileURLToPath } from "url";


import { userRouter } from './router/userAPI.js';
import { health } from './controller/health.js';
import { invalid } from './controller/invalid.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({
    origin:  ["http://localhost:5173","https://donorcircle-2.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
// app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("image"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/health", health);


app.use("/Users", userRouter);



// app.use("/{*any}",invalid);



mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Database is connected...")

        const PORT = process.env.PORT || 5006;

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.log("error=", error.message)
    })
