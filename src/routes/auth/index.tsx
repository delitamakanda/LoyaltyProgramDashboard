import LoginPage from "@/features/LoginPage.tsx";
import RegisterPage from "@/features/RegisterPage.tsx";
import ResetPasswordPage from "@/features/ResetPasswordPage.tsx";
import ForgotPasswordPage from "@/features/ForgotPasswordPage.tsx";

const AuthRoutes = [
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'register',
        element: <RegisterPage />
    },
    {
        path: 'forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        path: 'reset-password/:token',
        element: <ResetPasswordPage />
    }
];

export default AuthRoutes;
