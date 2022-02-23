import { PrismaClient } from '@prisma/client';

const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
} = process.env;

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/Trybesmith`,
    },
  },
});

export default prismaClient;
