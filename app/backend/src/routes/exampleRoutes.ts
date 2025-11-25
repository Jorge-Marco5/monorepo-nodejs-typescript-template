import { Router } from "express";
import { getHello } from "../controllers/exampleController";

const router = Router();

router.get("/hello", getHello);

export default router;
