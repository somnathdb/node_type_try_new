import { Request,Response } from "express";
import { userService } from "../services/user.service";

const userServices = new userService();

export class userController{
    static async createUser(req:Request,res:Response){
        let result = await userServices.createUser(req.body)
        res.status(201).json({message:"User Created",data:result})
    }
}