import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import exampleRoutes from "./routes/exampleRoutes";
import logger from "./utils/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});
app.use(limiter);

// Routes
app.use("/api", exampleRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Start server
app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
