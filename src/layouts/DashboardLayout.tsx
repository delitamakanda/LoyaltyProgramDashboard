import {Outlet, Link, useLocation } from "react-router-dom"
import { cn } from '@/lib/utils'

const DashboardLayout = () => {
    const location = useLocation()
    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path);
    }
    return(
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Loyalty Program</h1>
                </div>

                <nav className="flex-1">
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
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-2">
                        <span>Admin</span>
                        <button className="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m6 9 6 6 6-6"/></svg>
                        </button>
                    </div>
                </header>
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
