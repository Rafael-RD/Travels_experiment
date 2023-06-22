import { Router } from "express";
import passengerRouter from "./passengers.router.js";

const indexRouter = Router();

indexRouter.use(passengerRouter);

export default indexRouter;