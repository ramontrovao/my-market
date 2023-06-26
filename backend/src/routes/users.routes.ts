import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { UsersController } from "../controllers/UsersController";
import { UserProductsController } from "../controllers/UserProductsController";

export const usersRoutes = Router();

const usersController = new UsersController();
const userProductsController = new UserProductsController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/me", ensureAuthenticated, usersController.show);
usersRoutes.get("/products", ensureAuthenticated, userProductsController.index);
