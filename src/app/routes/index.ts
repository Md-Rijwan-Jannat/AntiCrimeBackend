import { Router } from "express";
import { AuthRoutes } from "../module/Auth/auth.routes";
import { UserRoutes } from "../module/User/user.routes";
import { CrimeReportRoutes } from "../module/CrimeReport/crimeReport.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/crime-reports",
    route: CrimeReportRoutes,
  },
];

// This will automatically loop your routes that you will add in the moduleRoutes array
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
