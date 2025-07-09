import DashboardLayout from "@/layouts/DashboardLayout.tsx";
import DashboardHome from "@/features/DashboardHome.tsx";
import ClientRoutes from "@/routes/dashboard/clients";
import RewardRoutes from "@/routes/dashboard/rewards";
import TransactionRoutes from "@/routes/dashboard/transactions";

const DashboardRoutes = [
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            ...ClientRoutes,
            ...RewardRoutes,
            ...TransactionRoutes,
        ]
    }
]
export default DashboardRoutes;
