import { Router } from "express";
import { passengerTravelsController } from "../controllers/passengers.controller.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels", passengerTravelsController)

export default passengerRouter;