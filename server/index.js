import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import { userRouter } from './router/userAPI.js';
import { health } from './controller/health.js';
import { invalid } from './controller/invalid.js';

dotenv.config();

const app = express();

app.use(cors({
    origin:  "https://donorcircle-2.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
// app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("image"))


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
