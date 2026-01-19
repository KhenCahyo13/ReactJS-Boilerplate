export interface ApiResponse<TData, TMeta> {
    success: boolean;
    message: string;
    data: TData;
    meta: TMeta;
}
