import { getUser } from "../services/UserService";
import { getCar } from "../services/CarService";
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import fastify, { FastifyInstance, RouteOptions } from 'fastify';

/** GET /user */
export function getUserController(req: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.send(getUser())
}