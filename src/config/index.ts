import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	port: process.env.PORT as number,
	database_url: process.env.DATABASE_URL as string,

	accessToken: process.env.JWT_ACCESS_SECRET as string,
	refreshToken: process.env.JWT_REFRESH_SECRET as string,

	accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
	accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
	refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
	refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
	accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as number,
	refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as number,
};

const customConfig:{
  port :number;
} ={
  port:process.env.PORT
}
