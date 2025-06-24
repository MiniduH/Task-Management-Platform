import  express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./Routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST;

// connect to MongoDb database
mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


//Import routes
app.use("/task",route)