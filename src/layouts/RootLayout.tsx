import {Link, Outlet} from "react-router-dom";
import { Button } from '@/components/ui/button'
import { ModeToggle } from "@/components/ModeToggle"
import {useTranslation} from "react-i18next";

const RootLayout = () => {
    const { t } = useTranslation()
    return (
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-50">
            <header className="px-6 py-4 flex justify-between items-center border-b">
                <h1 className="text-2xl font-bold">{t('name')}</h1>
                <nav className="space-x-4">
                    <a href="#features" className="text-sm font-medium hover:underline">{t('home.features')}</a>
                    <a href="#pricing" className="text-sm font-medium hover:underline">{t('home.pricing')}</a>
                    <a href="#faq" className="text-sm font-medium hover:underline">{t('home.faq')}</a>
                    <ModeToggle />
                    <Button asChild>
                        <Link to="/login">{t('home.login')}</Link>
                    </Button>
                </nav>
            </header>
            <div className="flex-grow">
                <Outlet />
            </div>
            {/* Footer */}
            <footer className="text-center text-sm py-6 border-t text-muted-foreground">
                &copy; {new Date().getFullYear()} {t('name')} {t('footer')}
            </footer>
        </div>
    )
}
export default RootLayout;
