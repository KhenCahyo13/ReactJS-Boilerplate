export interface Post {
    id: string;
    title: string;
    content: string;
    categories: string[];
    status: 'draft' | 'published' | 'unpublished';
    created_at: string;
    created_by: string;
}