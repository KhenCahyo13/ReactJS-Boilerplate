import ContentLayout from "@/components/layouts/content-layout";
import PostsDataOverview from "./components/data-overview";
import { memo, type FC } from "react";
import PostsDataTable from "./components/datatable";
import type { PostsViewProps } from "./types";

const PostsView: FC<PostsViewProps> = ({
    table,
    isPostsLoading,
    isPostsError,
    refetchPosts,
}) => (
    <ContentLayout title="Posts" description="View and manage your posts here.">
        <PostsDataOverview />
        {/* <PostsDataOverviewSkeleton /> */} {/* Use this skeleton component while loading data */}
        <PostsDataTable
            table={table}
            isPostsLoading={isPostsLoading}
            isPostsError={isPostsError}
            refetchPosts={refetchPosts}
        />
    </ContentLayout>
);

export default memo(PostsView);