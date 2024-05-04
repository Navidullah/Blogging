import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../api/routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.listen(3000, () => {
  console.log("Wooow! Server is running on 3000 port");
});
app.use("/api/user", userRouter);
