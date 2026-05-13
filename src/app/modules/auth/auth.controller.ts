import { Request, Response } from "express";
import { AuthService } from "./auth.service";


const login = async(req: Request, res: Response) =>{
    const result = await AuthService.login("swarnali@gmail.com")
    res.json({
        success: true,
        message: "Successfully",
        data: result
    })
}
const register = async(req: Request, res: Response) =>{
    const result = await AuthService.register("swarnali@gmail.com")
    res.json({
        success: true,
        message: "Successfully",
        data: result
    })
}
const changePassword = async(req: Request, res: Response) =>{
    const result = await AuthService.changePassword("swarnali@gmail.com")
    res.json({
        success: true,
        message: "Successfully",
        data: result
    })
}
const forgotPassword = async(req: Request, res: Response) =>{
    const result = await AuthService.forgotPassword("swarnali@gmail.com")
    res.json({
        success: true,
        message: "Successfully",
        data: result
    })
}

export const AuthController ={
    login,
    register,
    changePassword,
    forgotPassword,
}