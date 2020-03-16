import {Router} from "express" ;
const routes = Router();

import UserController from "./controller/UserController" ;
import ProductController from "./controller/ProductController" ;
import LoginController from "./controller/LoginController" ;

import AuthMiddlewares from "./config/auth" ;

// User routes
routes.post("/users/register" , UserController.store);
routes.get("/users/show" , UserController.show);

// Authentication route
routes.post("/users/authentication" , LoginController.login);

routes.use(AuthMiddlewares);

// Product routes
routes.post("/products/register" , ProductController.store);
routes.get("/products/show" , ProductController.show);

export default routes ;