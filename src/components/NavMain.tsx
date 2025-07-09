import {SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarGroupContent} from '@/components/ui/sidebar'
import type {Icon} from "@tabler/icons-react";
import { NavLink } from'react-router-dom'

export const NavMain = ({ items }: {items: {
    label: string;
    icon?: Icon;
    href: string;
    }[]}) => {
    return(
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center gap-2">
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    {items.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton tooltip={item.label} asChild>
                                <NavLink to={item.href}>
                                    {item.icon && <item.icon />}
                                    <span>{item.label}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}