import type { FC } from 'react';

import NavMain from '@/components/layouts/nav-main';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar';

import { useSidebar } from '../ui/sidebar';
import AppLogo from './app-logo';
import NavSecondary from './nav-secondary';
import UserInfo from './user-info';

const AppSidebar: FC = () => {
	const { open } = useSidebar();

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="pt-5 pb-4 pl-4">
                <AppLogo isOnlyLogo={!open} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain />
            </SidebarContent>
            <SidebarFooter className='pb-5'>
                <NavSecondary />
				<UserInfo />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
};

export default AppSidebar;
