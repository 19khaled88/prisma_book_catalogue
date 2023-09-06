import { Request } from "express";

export type NotFound = {
	message: string;
};

export type Exist = {
	message: string;
};

export interface IGetUserAuthVerifiedRequest extends Request{
	role:string,
	
}

export type IAuthType = {
	role:string,
	userId:string,
	iat:number,
	exp:number
}
