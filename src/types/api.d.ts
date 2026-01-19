export interface ApiResponse<TData, TMeta> {
    success: boolean;
    message: string;
    data: TData;
    meta: TMeta;
}

export interface ApiPagination {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
