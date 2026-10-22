import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

const port = Number(process.env.PORT) || 4000;

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
