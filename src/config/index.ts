import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
	port: process.env.PORT as number,
	database_url: process.env.DATABASE_URL as string,


	accessToken: process.env.JWT_ACCESS_SECRET as string,
	refreshToken: process.env.JWT_REFRESH_SECRET as string,

	accessTokenKey: process.env.ACCESS_TOKEN_KEY as string,
	refreshTokenKey: process.env.REFRESH_TOKEN_KEY as string,

	accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as number,
	refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as number,
};

const customConfig:{
  port :number;
} ={
  port:process.env.PORT
}
