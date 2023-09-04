import { Request,Response } from "express";
import { UserService } from "./services";
import sendResponse from "../../shared/sendResponse";
import httpStatus from 'http-status'

const signUpController =async(req:Request,res:Response)=>{
    const result = await UserService.signUpServices(req.body)
    res.send({
        data:result
    })
}

const signInController=async(req:Request,res:Response)=>{
    const result = await UserService.signInServices(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Sign In successful',
        data:result
    })
    // res.send({
    //     data:result
    // })
}

export const UserController ={
    signUpController,
    signInController
}