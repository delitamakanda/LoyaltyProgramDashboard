import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
    return(
        <div className="flex flex-col h-screen">
            <header className="flex justify-between items-center py-4 px-6 bg-gray-900">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <div className="flex gap-4">
                    {/* Add your navigation links here */}
                </div>
            </header>
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout;
