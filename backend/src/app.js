import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";
import path from 'path';
// import { fileURLToPath } from './assets/cousral';
import { fileURLToPath } from 'url';





const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))
// app.use(express.static())
app.use(cookieParser())
// app.use(bodyParser.json())

// const pathname = path.join(__dirname,"./assets/cousral")
// app.use(express.static(pathname));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use('/assets', express.static(path.join('/media/aashutosh/Local%20Disk%20:%20D/aviationspace/backend/src/assets/', '../assets')));
app.use('/assets', express.static('/media/aashutosh/Local%20Disk%20:%20D/aviationspace/backend/src/assets'));




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });





import userRouter from "./routes/user.routes.js"
import bodyParser from "body-parser";
import verifyToken from "./middleware/auth.middleware.js";


app.use("/api/v1/users" , userRouter)


export { app };