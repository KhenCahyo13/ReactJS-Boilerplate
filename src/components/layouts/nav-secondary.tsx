import { IconLogout } from '@tabler/icons-react';

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
    {
        title: 'Keluar',
        icon: IconLogout,
    },
];

const NavSecondary = () => {
    return (
        <SidebarMenu>
            {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton tooltip={item.title} className={cn(
                        item.title === 'Keluar' && 'text-destructive hover:text-destructive hover:bg-destructive/10'
                    )}>
                        <item.icon />
                        <span>{item.title}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
};

export default NavSecondary;
