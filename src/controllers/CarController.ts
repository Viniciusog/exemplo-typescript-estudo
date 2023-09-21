import { FastifyReply, FastifyRequest } from "fastify";
import { getCar } from "../services/CarService";

/** GET /car */
export function getCarController(req: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.send(getCar())
}
