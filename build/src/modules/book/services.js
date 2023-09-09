"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBookService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.book.create({
            data: data,
            include: {
                category: true,
            },
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2003") {
            throw new Error("No Category found with this ID");
        }
    }
});
const getAllBookService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany();
    return result;
});
const singleBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findFirst({
        where: {
            id: id,
        },
    });
    if (result !== null) {
        return result;
    }
    else {
        throw new Error("Book not found for this ID");
    }
});
const updateBookService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.book.update({
            where: {
                id: id,
            },
            data: payload,
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025") {
            throw new Error("No book found with this ID");
        }
    }
});
const deleteBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.book.delete({
            where: {
                id: id,
            },
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            throw new Error("No book found with this ID");
        }
    }
});
exports.BookService = {
    createBookService,
    getAllBookService,
    singleBookService,
    updateBookService,
    deleteBookService
};
