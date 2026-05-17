import { Request, Response, Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateSchema";
import { loginValidationSchema, userValidationSchema } from "./auth.validation";

const router:Router = Router();

// router.get("/same-folder", (req: Request, res:Response)=>{
//     const buisnessLogicResult = "buisness logic";

//     res.json({
//         success:true,
//         message: "Successfully fetched",
//         data: buisnessLogicResult
//     })
// })

router.post("/login", validateRequest(loginValidationSchema) ,AuthController.login);
router.post("/register",validateRequest(userValidationSchema), AuthController.register);
router.get("/verify-email/:token", AuthController.verifyEmail);
router.post("/change-password", AuthController.changePassword);
router.post("/forgot-password", AuthController.forgotPassword);

export const AuthRoutes = router;