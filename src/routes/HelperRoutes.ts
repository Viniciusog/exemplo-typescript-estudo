import { RouteOptions } from "fastify";
import { getStandard } from "../controllers/HelperController";

export const helperRoutes: RouteOptions[] = [
    {
        method: "GET",
        url: "/",
        handler: getStandard
    },
]