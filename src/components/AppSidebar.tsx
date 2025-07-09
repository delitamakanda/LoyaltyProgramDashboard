import {
    IconDashboard,
    IconFileWord,
    IconHelp,
    IconInnerShadowTop,
    IconReport,
    IconUsers,
} from "@tabler/icons-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavMain } from "./NavMain"
import { NavUser } from "./NavUser"
import { NavSecondary } from "./NavSecondary"
import * as React from "react";

const data = {
    user: {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        avatar: "/images/demo/users/3.jpg",
    },
    mainNavItems: [
        {
            label: "Dashboard",
            icon: IconDashboard,
            href: "/dashboard",
        },
        {
            label: "Clients",
            icon: IconUsers,
            href: "/dashboard/clients",
        },
        {
            label: "Rewards",
            icon: IconReport,
            href: "/dashboard/rewards",
        },
        {
           label: "Transactions",
           icon: IconFileWord,
           href: "/dashboard/transactions",
        }
    ],
    secondaryNavItems: [
        {
            label: "Get Help",
            icon: IconHelp,
            href: "#",
        }
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <a href="#">
                                <IconInnerShadowTop className="!size-5" />
                                <span className="text-base font-semibold">Loyalty Program.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.mainNavItems} />
                <NavSecondary items={data.secondaryNavItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
