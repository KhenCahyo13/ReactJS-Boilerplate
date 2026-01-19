import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight,
} from '@tabler/icons-react';
import type { FC } from 'react';

import type { ApiPagination } from '@/types/api';

import { Button } from '../ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
} from '../ui/pagination';
import { useDataTableStore } from '@/stores/datatable-store';
import { getPaginationPages } from '@/lib/pagination';

export interface DataTablePaginationProps {
    pagination: ApiPagination | undefined;
}

export const DataTablePagination: FC<DataTablePaginationProps> = ({
    pagination,
}) => {
    const { page, setPage } = useDataTableStore();

    const pages = getPaginationPages(page, pagination?.last_page ?? 1);

    return (
        <div className="flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:justify-between">
            <span className="text-sm text-muted-foreground text-nowrap">
                Menampilkan {pagination?.from} hingga {pagination?.to} dari{' '}
                {pagination?.total} data
            </span>
            <Pagination className="justify-center lg:justify-end">
                <PaginationContent>
                    <Button
                        variant="outline"
                        onClick={() => setPage(1)}
                        disabled={page <= 1}
                    >
                        <IconChevronsLeft />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setPage(page - 1)}
                        disabled={page <= 1}
                    >
                        <IconChevronLeft />
                    </Button>
                    {pages.map((page, index) =>
                        page === 'ellipsis' ? (
                            <PaginationItem key={`ellipsis-${index}`}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={page}>
                                <Button
                                    variant={
                                        pagination?.current_page === page
                                            ? 'outline'
                                            : 'ghost'
                                    }
                                    onClick={() => setPage(Number(page))}
                                >
                                    {page}
                                </Button>
                            </PaginationItem>
                        )
                    )}
                    <Button
                        variant="outline"
                        onClick={() => setPage(pagination?.last_page ?? 1)}
                        disabled={
                            (pagination?.current_page ?? 1) >=
                            (pagination?.last_page ?? 1)
                        }
                    >
                        <IconChevronsRight />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            setPage((pagination?.current_page ?? 1) + 1)
                        }
                        disabled={
                            (pagination?.current_page ?? 1) >=
                            (pagination?.last_page ?? 1)
                        }
                    >
                        <IconChevronRight />
                    </Button>
                </PaginationContent>
            </Pagination>
        </div>
    );
};
