import fastify from "fastify";

import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "John Doe",
    email: "john.doe@example.com"    
  }
});

export const app = fastify();

