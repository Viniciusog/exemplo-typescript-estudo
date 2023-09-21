import { RouteOptions } from "fastify"
import { getUserController } from "../controllers/UserController"

export const userRoutes: RouteOptions[] = [
    {
        method: "GET",
        url: "/user",
        handler: getUserController
    },
]