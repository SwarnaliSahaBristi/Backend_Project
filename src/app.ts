import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app:Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json("Data fetching...");
});

// app.listen(5000, () => {
//   console.log("Server is running...");
// });

export default app;
