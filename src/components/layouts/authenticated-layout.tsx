import { Link, Outlet, useMatches, useNavigate } from '@tanstack/react-router';
import type { FC } from 'react';
import { Fragment, useEffect } from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import type { LayoutProps } from '@/types/component';

import { Separator } from '../ui/separator';
import AppSidebar from './app-sidebar';
import { useAuthStore } from '@/stores/auth-store';

const AuthenticatedLayout: FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const { tokens } = useAuthStore();
    const matches = useMatches();

    const breadcrumbs = matches
        .filter(
            (match) =>
                match.id !== '__root__' &&
                match.id !== '/(authenticated)' &&
                match.pathname !== '/'
        )
        .map((match) => {
            const pathSegments = match.pathname
                .split('/')
                .filter((segment) => segment !== '');
            const label =
                pathSegments.length > 0
                    ? pathSegments[pathSegments.length - 1]
                        .replace(/-/g, ' ')
                        .replace(/\b\w/g, (char) => char.toUpperCase())
                    : 'Home';

            return {
                href: match.pathname,
                label,
            };
        });

    useEffect(() => {
        if (!tokens) {
            navigate({ to: '/login' });
        }
    }, [tokens, navigate]);

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((breadcrumb, index) => {
                                    const segments = breadcrumb.href
                                        .split('/')
                                        .filter((s) => s !== '');

                                    const lastSegment = segments[segments.length - 1] ?? '';
                                    const isUuid =
                                        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
                                            lastSegment
                                        );
                                    const isNumeric = /^[0-9]+$/.test(lastSegment);
                                    const isCreate = /^(create|new)$/i.test(lastSegment);
                                    const isEdit = /^edit$/i.test(lastSegment);

                                    const formatLabel = (seg: string) =>
                                        seg
                                            .replace(/-/g, ' ')
                                            .replace(/\b\w/g, (ch) => ch.toUpperCase()) || 'Home';

                                    let displayLabel: string;

                                    if (isUuid || isNumeric) {
                                        displayLabel = 'Details';
                                    } else if (isCreate) {
                                        displayLabel = 'Create';
                                    } else if (isEdit) {
                                        displayLabel = 'Edit';
                                    } else {
                                        displayLabel = formatLabel(lastSegment || 'Home');
                                    }

                                    return (
                                        <Fragment key={breadcrumb.href}>
                                            <BreadcrumbItem>
                                                {index === breadcrumbs.length - 1 ? (
                                                    <BreadcrumbPage>{displayLabel}</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink asChild>
                                                        <Link to={breadcrumb.href}>
                                                            {displayLabel}
                                                        </Link>
                                                    </BreadcrumbLink>
                                                )}
                                                {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                            </BreadcrumbItem>
                                        </Fragment>
                                    );
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children ?? <Outlet />}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default AuthenticatedLayout;
