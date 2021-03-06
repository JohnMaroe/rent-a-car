import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);

export { carsRoutes };