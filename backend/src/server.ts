import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import env from "./util/validateEnv";

const app = express();
const port = env.PORT;

app.get("/", (req, res) => {
    res.send("Hello Anjing!");
    }
);

mongoose.connect(env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        })
    })
    .catch(console.error);