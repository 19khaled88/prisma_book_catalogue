import { User, PrismaClient } from "@prisma/client";
import hashToken from "../../../utils/hashToken";


const prisma = new PrismaClient();

const singUpUserService = async (data: User): Promise<User> => {
    if(data.password && data.password !== null){
        data.password =await hashToken(data.password)
    }
	// const result = await prisma.user.create({
	// 	data: data,
	// });
	return data;
};
const singInUserService = async (data: Partial<User>) => {
	const result = await prisma.user.findFirst({
        where:{
            AND:[
               {
                email:data.email
               },
               {
                password:data.password
               }
            ]
        }
    })
    console.log(result)
};

export const UserService = {
	singUpUserService,
	singInUserService,
};
