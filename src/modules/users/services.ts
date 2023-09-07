import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { signJwt } from "../../utils/token";
import { Token } from "./interface";
const prisma = new PrismaClient();

const signUpServices = async (data: User) => {
	const hashedPassword = await bcrypt.hash(data.password, 12);
	data.password = hashedPassword;
	const result = await prisma.user.create({
		data: data,
	});
	return result;
};

const signInServices = async (data: Partial<User>): Promise<Token | null> => {
	const isExist = await prisma.user.findFirst({
		where: {
			email: data.email,
		},
	});
	if (
		isExist !== null &&
		data.password !== undefined &&
		(await bcrypt.compare(data.password, isExist.password))
	) {
		const access_token = signJwt(
			{ role: isExist.role, userId: isExist.id },
			{ expiresIn: "2h" }
		);

		return { token: access_token };
	}

	throw new Error('This user not found')
};

const getAllUsers = async (): Promise<User[]> => {
	const result = await prisma.user.findMany();
	return result;
};

const getSingleUser = async (id: string): Promise<User | null> => {
	const isExist = await prisma.user.findFirst({
		where: {
			id: id,
		},
	});
	return isExist;
};

const deleteUser = async (id: string) => {
	const isDeleted = await prisma.user.delete({
		where: {
			id: id,
		},
	});
	return isDeleted;
};

const updateUser = async (
	id: string,
	payload: Partial<User>
): Promise<User> => {
	const isUpdated = await prisma.user.update({
		where: {
			id: id,
		},
		data: payload,
	});
	return isUpdated;
};
export const UserService = {
	signUpServices,
	signInServices,
	getAllUsers,
	getSingleUser,
	deleteUser,
	updateUser,
};
