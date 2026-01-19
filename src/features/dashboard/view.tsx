import { memo } from "react";

import ContentLayout from "@/components/layouts/content-layout";

const DashboardView = () => (
    <ContentLayout title="Dashboard" description="Welcome to the dashboard">
        <h1 className="text-lg font-semibold">Dashboard View</h1>
    </ContentLayout>
);

export default memo(DashboardView);