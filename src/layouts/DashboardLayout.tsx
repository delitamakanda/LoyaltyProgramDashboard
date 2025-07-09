import { Outlet } from "react-router-dom"
import { AppSidebar } from '@/components/AppSidebar'
import { SiteHeader } from "@/components/SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import "@/layouts/theme.css"
import * as React from "react";

const DashboardLayout = () => {
    const defaultOpen = true;
    return(
        <SidebarProvider defaultOpen={defaultOpen} style={{
            "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties}>
            <AppSidebar variant="inset"></AppSidebar>
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout;