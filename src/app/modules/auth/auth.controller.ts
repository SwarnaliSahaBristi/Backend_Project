import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { ApiResponse } from "../../../utils/ApiResponse";
import catchAsync from "../../../utils/catchAsync";

const login = catchAsync(async (req: Request, res: Response) => {
  throw new Error("Error occured!!")
  // const result = await AuthService.login("swarnali@gmail.com");
  // ApiResponse.success(res, result, "Successfully Login");
});

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register("swarnali@gmail.com");
  ApiResponse.success(res, result, "Successfully Register");
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.changePassword("swarnali@gmail.com");
  // res.json({
  //     success: true,
  //     message: "Successfully",
  //     data: result
  // })
  ApiResponse.success(res, result, "Successfully Changed Password");
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.forgotPassword("swarnali@gmail.com");
  ApiResponse.success(res, result, "Forgot Password");
});

export const AuthController = {
  login,
  register,
  changePassword,
  forgotPassword,
};
