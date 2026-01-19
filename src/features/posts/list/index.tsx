import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import PostsView from "./view";
import { dummyPosts } from "./dummy";
import { createPostsTableColumns } from "./data";

const Posts = () => {
    // eslint-disable-next-line react-hooks/incompatible-library
    const postsTable = useReactTable({
        data: dummyPosts,
        columns: createPostsTableColumns(),
        getCoreRowModel: getCoreRowModel(),
    });

    return <PostsView
        table={postsTable}
        isPostsLoading={false}
        isPostsError={false}
        refetchPosts={() => { }}
    />;
};

export default Posts;