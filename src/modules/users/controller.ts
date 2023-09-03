import { Request,Response } from "express";
import { UserService } from "./services";


const signUpController =async(req:Request,res:Response)=>{
    const result = await UserService.signUpServices(req.body)
    res.send({
        data:result
    })
}

const signInController=async(req:Request,res:Response)=>{
    const result = await UserService.signInServices(req.body)
    res.send({
        data:result
    })
}

export const UserController ={
    signUpController,
    signInController
}