import { Request, Response, Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middleware/validateSchema";
import { EmailSchema } from "./auth.validation";

const router:Router = Router();

// router.get("/same-folder", (req: Request, res:Response)=>{
//     const buisnessLogicResult = "buisness logic";

//     res.json({
//         success:true,
//         message: "Successfully fetched",
//         data: buisnessLogicResult
//     })
// })

router.get("/login", validateRequest(EmailSchema), AuthController.login);
router.get("/register", validateRequest(EmailSchema),AuthController.register);
router.get("/change-password", validateRequest(EmailSchema),AuthController.changePassword);
router.get("/forgot-password", validateRequest(EmailSchema),AuthController.forgotPassword);

export const AuthRoutes = router;