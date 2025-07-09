import {type Icon, IconBrightness} from "@tabler/icons-react"
import { useTheme } from "@/hooks/useTheme";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import {useEffect, useState} from "react";
import * as React from "react";
import { NavLink } from "react-router-dom"

export function NavSecondary({
    items,
    ...props
}: {
    items: {
        label: string;
        icon?: Icon;
        href: string;
    }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    const { theme, toggleTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild>
                                <NavLink to={item.href}>
                                    {item.icon && <item.icon />}
                                    <span>{item.label}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <SidebarMenuItem className="group-data-[collapsible=icon]:hidden">
                        <SidebarMenuButton asChild>
                            <label>
                                <IconBrightness />
                                <span>Toggle Dark Mode</span>
                                {mounted ? (
                                    <Switch className="ml-auto" checked={theme === 'dark'} onCheckedChange={
                                        () => {
                                            toggleTheme()
                                        }
                                    } />
                                ): <Skeleton className="ml-auto h-4 w-8 rounded-full" />}
                            </label>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}