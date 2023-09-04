import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path:path.join(process.cwd(),'.env')});

export default {
    port: process.env.PORT,
    env:process.env.NODE_ENV,
    databaseUrl:process.env.DATABASE_URL,
    jwt_token:process.env.JWT_ACCESS_SECRET,
    jwt_refresh_token:process.env.JWT_REFRESH_SECRET
  };
