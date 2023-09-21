import { RouteOptions, fastify } from "fastify"
import { routes } from "./routes/routes"

const server = fastify()

server.listen({port:3333})
console.log("AQUI 1")

console.log(routes)

routes.forEach((r: RouteOptions) => {
    console.log("A")
    server.route(r)
})
