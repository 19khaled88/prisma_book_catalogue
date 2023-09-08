import { Request } from "express";

export {};
// extend Request globally
declare global {
  namespace Express {
    export interface Request {
      userNeededId: string;
      userRole?: string;
    }
  }
}

export type NotFound = {
  message: string;
};

export type Exist = {
  message: string;
};

export interface IGetUserAuthVerifiedRequest extends Request {
  role: string;
  userId: string;
}

export type IAuthType = {
  role: string;
  userId: string;
  iat: number;
  exp: number;
};
