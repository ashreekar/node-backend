import express from "express";
import cors from "cors";
import "./database/index.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { corsUrl, port } from "./config.js";
import todoRoutes from "./routes/todoRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const PORT = port ?? 8080;

export const app = express();

app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes

app.use(errorHandler);

app.listen(PORT, ()=>{
  console.log(`Server is runing on port ${PORT}`);
});