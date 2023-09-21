import { carRoutes } from "./CarRoutes";
import { RouteOptions } from "fastify";
import { userRoutes } from "./UserRoutes";
import { helperRoutes } from "./HelperRoutes";

const routes: RouteOptions[] = []

// Todas as rotas existentes devem ser concatenadas no array routes
routes.push(...helperRoutes)
routes.push(...carRoutes)
routes.push(...userRoutes)

// Em seguida, exportamos routes para que o servidor consiga utilizar
export { routes }