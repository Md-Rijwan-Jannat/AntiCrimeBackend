import { Router } from "express";
import { AuthRoutes } from "../module/Auth/auth.routes";
import { ReportsRoutes } from "../module/reports/reports.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/reports/create",
    route: ReportsRoutes,
  },
  // {
  //   path: "/users",
  //   route: UserRoutes,
  // },
];

// This will automatically loop your routes that you will add in the moduleRoutes array
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
