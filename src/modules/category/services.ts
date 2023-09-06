import { Category, Prisma, PrismaClient } from "@prisma/client";
import { Exist, NotFound } from "./interface";

const prisma = new PrismaClient();

const categoryCreateService = async (
  data: Category
): Promise<Category | Exist> => {
  const isExist = await prisma.category.findFirst({
    where: {
      title: data.title,
    },
  });
  if (isExist === null) {
    const result = await prisma.category.create({
      data: data,
    });
    return result;
  } else {
    throw new Error("This category title already exist");
  }
};

const allCategoryService = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};

const singleCategoryService = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findFirst({
    where: {
      id: id,
    },
    include: {
      books: true,
    },
  });
  return result;
};

const updateCategoryService = async (
  id: string,
  payload: Partial<Category>
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteCategoryService = async (
  id: string
): Promise<Category | Exist | undefined> => {
  try {
    const result = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    return result;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      throw new Error("No user found with this ID");
    }
  }
};

export const CategoryService = {
  categoryCreateService,
  allCategoryService,
  singleCategoryService,
  updateCategoryService,
  deleteCategoryService,
};
