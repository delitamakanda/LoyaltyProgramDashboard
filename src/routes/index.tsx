import {createBrowserRouter} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import HomePage from "@/features/HomePage.tsx";
import NotFound from "@/components/NotFound.tsx";
import AuthRoutes from "@/routes/auth";
import DashboardRoutes from "@/routes/dashboard";

const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    ...DashboardRoutes,
    ...AuthRoutes,
    {
        path: "*",
        component: <NotFound />
    }
    // Add more routes as needed...
]

const router = createBrowserRouter(routes);

export default router;