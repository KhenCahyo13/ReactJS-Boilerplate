import type { Post } from "@/types/post";
import type { Table } from "@tanstack/react-table";

export interface PostsDataTableProps {
    table: Table<Post>;
    isPostsLoading: boolean;
    isPostsError: boolean;
    refetchPosts: () => void;
}

export type PostsViewProps = PostsDataTableProps;