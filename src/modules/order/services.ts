import { Order, Prisma, PrismaClient } from "@prisma/client";
import { JsonArray } from "@prisma/client/runtime/library";
const prisma = new PrismaClient();

const createOrderService = async (data: Order, id: string) => {
  const result = await prisma.order.create({
    data: {
      userId: id,
      orderedBooks: data.orderedBooks as Prisma.JsonArray,
    },
  });
  return result;
};

const allOrderService = async (userId: string, role: string) => {
  let result = null;
  if (role === "admin") {
    result = await prisma.order.findMany();
  } else {
    result = await prisma.order.findMany({
      where: {
        userId: userId,
      },
    });
  }
  return result;
};

const singleOrderService = async (id: string) => {
  const result = await prisma.order.findFirst({
    where: {
      id: id,
    },
  });
  if (result !== null) {
    return result;
  } else {
    throw new Error("Orders not found for this ID");
  }
};

export const OrderSerivce = {
  createOrderService,
  allOrderService,
  singleOrderService
};
