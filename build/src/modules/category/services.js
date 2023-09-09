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
exports.CategoryService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const categoryCreateService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.category.findFirst({
        where: {
            title: data.title,
        },
    });
    if (isExist === null) {
        const result = yield prisma.category.create({
            data: data,
        });
        return result;
    }
    else {
        throw new Error("This category title already exist");
    }
});
const allCategoryService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.findMany();
    return result;
});
const singleCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.findFirst({
        where: {
            id: id,
        },
        include: {
            books: true,
        },
    });
    return result;
});
const updateCategoryService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.category.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
});
const deleteCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.category.delete({
            where: {
                id: id,
            },
        });
        return result;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025") {
            throw new Error("No user found with this ID");
        }
    }
});
exports.CategoryService = {
    categoryCreateService,
    allCategoryService,
    singleCategoryService,
    updateCategoryService,
    deleteCategoryService,
};
