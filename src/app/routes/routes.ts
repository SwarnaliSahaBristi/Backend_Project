import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";

const router: Router = Router();

const moduleRouters = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  // {
  //     path: "/hotel",
  //     route: AuthRoutes
  // },
  // {
  //     path: "/room",
  //     route: AuthRoutes
  // },
  // {
  //     path: "/others",
  //     route: AuthRoutes
  // },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
