import { IconDashboard, IconNotes } from '@tabler/icons-react';
import { Link, useLocation } from '@tanstack/react-router';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

const navItems = [
    {
        title: 'Dashboard',
        url: '/',
        icon: IconDashboard,
    },
    {
        title: 'Posts',
        url: '/posts',
        icon: IconNotes,
    },
];

const NavMain = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
                {navItems.map((item) => {
                    const isActive = pathname === item.url || (item.url !== '/' && pathname.startsWith(item.url));
                    
                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                isActive={isActive}
                                asChild
                            >
                                <Link to={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
};

export default NavMain;
