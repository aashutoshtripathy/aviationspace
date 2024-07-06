import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.use("/cousral", express.static(path.join(__dirname, "/assets/cousral")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/classifiedImages", express.static(path.join(__dirname, "/assets/classifiedImages")));
app.use("/newsImages", express.static(path.join(__dirname, "/assets/newsImages")));





const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

import userRouter from "./routes/user.routes.js";
import bodyParser from "body-parser";
import verifyToken from "./middleware/auth.middleware.js";

app.use("/api/v1/users", userRouter);

export { app };
