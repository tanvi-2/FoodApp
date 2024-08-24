import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const router = express.Router();
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import send_reservation from "./controller/reservation.js";
process.env.Frontend_URL="http://localhost:5173/";
const app = express();
dotenv.config({ path: "./env" });

app.use(
  cors({
    
    origin: ['http://localhost:5173'],
   /* methods: ["GET", "POST", "PUT", "DELETE"],
   */
    credentials: true,
    
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/reservation', reservationRouter);
app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})


dbConnection();

app.use(errorMiddleware);

export default app;
