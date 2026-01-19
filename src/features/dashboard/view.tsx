import ContentLayout from "@/components/layouts/content-layout";
import { memo } from "react";

const DashboardView = () => (
    <ContentLayout title="Dashboard" description="Welcome to the dashboard">
        <h1 className="text-lg font-semibold">Dashboard View</h1>
    </ContentLayout>
);

export default memo(DashboardView);