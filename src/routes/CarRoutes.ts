import { getUserController } from "../controllers/UserController";
import { getCarController } from "../controllers/CarController";
import { RouteOptions } from "fastify";

export const carRoutes: RouteOptions[] = [
    {
        method: "GET",
        url: "/car",
        handler: getCarController
    },
]