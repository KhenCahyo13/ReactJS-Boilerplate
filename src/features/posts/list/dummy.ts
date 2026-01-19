import type { ApiPagination } from "@/types/api";
import type { Post } from "@/types/post";

export const dummyPosts: Post[] = [
    {
        id: "1",
        title: "First Post",
        content: "This is the content of the first post.",
        categories: ["General", "Introduction"],
        status: "published",
        created_at: "2024-01-01T10:00:00Z",
        created_by: "Khen Cahyo",
    },
    {
        id: "2",
        title: "Second Post",
        content: "This is the content of the second post.",
        categories: ["Updates"],
        status: "draft",
        created_at: "2024-02-15T12:30:00Z",
        created_by: "John Doe",
    },
    {
        id: "3",
        title: "Third Post",
        content: "This is the content of the third post.",
        categories: ["News"],
        status: "unpublished",
        created_at: "2024-03-10T09:15:00Z",
        created_by: "Jane Doe",
    },
];

export const postsPagination: ApiPagination = {
    current_page: 1,
    first_page_url: 'http://localhost:8000/api/posts?page=1',
    from: 1,
    last_page: 10,
    last_page_url: 'http://localhost:8000/api/posts?page=10',
    next_page_url: 'http://localhost:8000/api/posts?page=2',
    path: 'http://localhost:8000/api/posts',
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 100,
};

export const dummyCategories = [
    "General",
    "Introduction",
    "Updates",
    "News",
    "Tech",
    "Lifestyle",
];