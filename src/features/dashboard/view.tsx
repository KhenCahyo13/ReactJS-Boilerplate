import { memo } from "react";

import ContentLayout from "@/components/layouts/content-layout";

const DashboardView = () => (
    <ContentLayout title="Dashboard" description="Welcome to the dashboard">
        <p className="text-muted-foreground">Dashboard content will appears here.</p>
    </ContentLayout>
);

export default memo(DashboardView);