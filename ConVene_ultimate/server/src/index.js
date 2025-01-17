import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { eventsRouter } from "./routes/events.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/events", eventsRouter);

mongoose.connect(
  "mongodb+srv://convene:convene@cluster0.q8hoojm.mongodb.net/convene",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));
