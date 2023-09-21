import { FastifyReply, FastifyRequest } from "fastify";

/** GET / */
export function getStandard(req: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.send("Hello World")
}