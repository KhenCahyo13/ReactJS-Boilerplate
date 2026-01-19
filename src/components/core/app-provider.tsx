import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import type { FC } from "react";

import type { router } from "@/main";
import type { LayoutProps } from "@/types/component";
import { AlertDialogProvider } from "../fallback/alert-dialog";

interface AppProviderProps extends LayoutProps {
    queryClient: QueryClient;
    appMode: string;
    router: typeof router;
}

const AppProvider: FC<AppProviderProps> = ({
    queryClient,
    appMode,
    children,
    router,
}) => (
    <QueryClientProvider client={queryClient}>
        {children}
        {appMode === "development" && (
            <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom"
                buttonPosition="bottom-right"
            />
        )}
        <RouterProvider router={router} />
        <AlertDialogProvider />
    </QueryClientProvider>
);

export default AppProvider;