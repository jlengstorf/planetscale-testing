import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function handler() {
  const posts = await prisma.post.findMany();

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  };
}
