import {Outlet, Link, useLocation } from "react-router-dom"
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

const DashboardLayout = () => {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)
    const [isMobileViewOpen, setIsMobileViewOpen ] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewOpen(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    const NavItems = () => (
        <ul className="space-y-1 px-2">
            <li>
                <Link
                    to="/dashboard"
                    className={cn(
                        "flex items-center px-4 py-3 rounded-md hover:bg-gray-800 transition-colors",
                        isActive("/dashboard") && !isActive("/dashboard/clients") &&
                        !isActive("/dashboard/transactions") && !isActive("/dashboard/rewards") &&
                        "bg-gray-800"
                    )}
                >
                    Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/clients"
                    className={cn(
                        "flex items-center px-4 py-3 rounded-md hover:bg-gray-800 transition-colors",
                        isActive("/dashboard/clients") && "bg-gray-800"
                    )}
                >
                    Clients
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/transactions"
                    className={cn(
                        "flex items-center px-4 py-3 rounded-md hover:bg-gray-800 transition-colors",
                        isActive("/dashboard/transactions") && "bg-gray-800"
                    )}
                >
                    Transactions
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/rewards"
                    className={cn(
                        "flex items-center px-4 py-3 rounded-md hover:bg-gray-800 transition-colors",
                        isActive("/dashboard/rewards") && "bg-gray-800"
                    )}
                >
                    Recompenses
                </Link>
            </li>
        </ul>
    )

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path);
    }
    return(
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={cn(
                "bg-gray-900 text-white flex flex-col",
                "fixed md:relative z-10 h-full transition-all duration-300 ease-in-out",
                isMobileViewOpen ? (isMobileMenuOpen ? "w-64 left-0" : "w-64 -left-64") : "w-64 left-0"
            )}>
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Loyalty Program</h1>
                </div>

                <nav className="flex-1">
                    <NavItems />
                </nav>

                <div className="p-4 mt-auto border-t border-gray-800">
                    <ul className="space-y-1">
                        <li>
                            <Link
                                to="/logout"
                                className="flex items-center px-4 py-3 rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center py-4 px-6 bg-white border-b">
                    {isMobileViewOpen && (
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md hover:bg-gray-100 mr-2"
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                            )}
                        </button>
                    )}
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-2">
                        <span>Admin</span>
                        <button className="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                    </div>
                </header>
                {isMobileViewOpen && isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
