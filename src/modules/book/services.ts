import { Book, Prisma, PrismaClient } from "@prisma/client";
import { NotFound } from "../../shared/interface";

const prisma = new PrismaClient();
const createBookService = async (data: Book): Promise<Book> => {
	try {
		const result = await prisma.book.create({
			data: data,
			include: {
				category: true,
			},
		});

		return result;
	} catch (error) {
		if (
			error instanceof Prisma.PrismaClientKnownRequestError &&
			error.code === "P2003"
		) {
			throw new Error("No Category found with this ID");
		}
	}
};

const getAllBookService = async (): Promise<Book[] | null> => {
	const result = await prisma.book.findMany();
	return result;
};

const singleBookService = async (id: string): Promise<Book | NotFound> => {
	const result = await prisma.book.findFirst({
		where: {
			id: id,
		},
	});
	if (result !== null) {
		return result;
	} else {
		throw new Error("Book not found for this ID");
	}
};

const updateBookService = async (
	id: string,
	payload: Partial<Book>
): Promise<Book | NotFound> => {
	try {
		const result = await prisma.book.update({
			where: {
				id: id,
			},
			data: payload,
		});
		return result;
	} catch (error) {
		if (
			error instanceof Prisma.PrismaClientKnownRequestError &&
			error.code === "P2025"
		) {
			throw new Error("No book found with this ID");
		}
	}
};

const deleteBookService = async (id: string) => {
	try {
		const result = await prisma.book.delete({
			where: {
				id: id,
			},
		});
		return result;
	} catch (error) {
		if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025'){
            throw new Error("No book found with this ID");
        }
	}
};

export const BookService = {
	createBookService,
	getAllBookService,
	singleBookService,
	updateBookService,
    deleteBookService
};
