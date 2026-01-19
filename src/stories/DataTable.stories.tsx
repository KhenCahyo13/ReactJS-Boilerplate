import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    type ColumnDef,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { DataTableBody } from '@/components/datatable/body';
import { TtTableCell } from '@/components/datatable/cell';
import { DataTableHeader } from '@/components/datatable/header';
import { DataTablePagination } from '@/components/datatable/pagination';
import { DataTable } from '@/components/datatable/wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const meta: Meta<typeof DataTable> = {
    title: 'Components/DataTable',
    component: DataTable,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'A flexible data table component with filtering, pagination, search capabilities, and integrated with TanStack Table & Zustand for DataTable state management.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple data
interface SimpleItem {
    id: string;
    name: string;
    status: string;
}

const simpleData: SimpleItem[] = [
    { id: '1', name: 'Item 1', status: 'Active' },
    { id: '2', name: 'Item 2', status: 'Inactive' },
    { id: '3', name: 'Item 3', status: 'Active' },
    { id: '4', name: 'Item 4', status: 'Pending' },
    { id: '5', name: 'Item 5', status: 'Active' },
];

const columns: ColumnDef<SimpleItem>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
            return (
                <TtTableCell>
                    <span>{row.original.name}</span>
                </TtTableCell>
            );
        },
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const badgeVariants: Record<
                string,
                'default' | 'destructive' | 'secondary'
            > = {
                Active: 'default',
                Inactive: 'destructive',
                Pending: 'secondary',
            };

            return (
                <TtTableCell>
                    <Badge
                        variant={
                            badgeVariants[row.original.status] || 'default'
                        }
                    >
                        {row.original.status}
                    </Badge>
                </TtTableCell>
            );
        },
    },
];

const mockPagination = {
    current_page: 1,
    first_page_url: 'http://localhost:8000/api/items?page=1',
    from: 1,
    last_page: 10,
    last_page_url: 'http://localhost:8000/api/items?page=10',
    next_page_url: 'http://localhost:8000/api/items?page=2',
    path: 'http://localhost:8000/api/items',
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 100,
};

// Stories
export const Default: Story = {
    render: () => {
        const table = useReactTable({
            data: simpleData,
            columns,
            getCoreRowModel: getCoreRowModel(),
        });

        return (
            <DataTable>
                {/* Header */}
                <DataTableHeader />
                {/* Body */}
                <DataTableBody
                    table={table}
                    isLoading={false}
                    isError={false}
                    refetchData={() => console.log('Refetch clicked')}
                    fallbackMessage="Data tidak ditemukan"
                    loaderMessage="Memuat data..."
                />
                {/* Footer */}
                <DataTablePagination pagination={mockPagination} />
            </DataTable>
        );
    },
};

export const WithFilters: Story = {
    render: () => {
        const table = useReactTable({
            data: simpleData,
            columns,
            getCoreRowModel: getCoreRowModel(),
        });

        return (
            <DataTable>
                {/* Header */}
                <DataTableHeader
                    filtersContent={
                        <>
                            <div className="grid grid-cols-1 gap-4">
                                <Field>
                                    <FieldLabel>Status</FieldLabel>
                                    <Select value="" onValueChange={() => {}}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="active">
                                                Active
                                            </SelectItem>
                                            <SelectItem value="inactive">
                                                Inactive
                                            </SelectItem>
                                            <SelectItem value="pending">
                                                Pending
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>
                            <DialogFooter>
                                <Button onClick={() => {}} variant="secondary">
                                    Reset
                                </Button>
                                <Button onClick={() => {}}>Apply</Button>
                            </DialogFooter>
                        </>
                    }
                />
                {/* Body */}
                <DataTableBody
                    table={table}
                    isLoading={false}
                    isError={false}
                    refetchData={() => console.log('Refetch clicked')}
                    fallbackMessage="Data tidak ditemukan"
                    loaderMessage="Memuat data..."
                />
                {/* Footer */}
                <DataTablePagination pagination={mockPagination} />
            </DataTable>
        );
    },
};

export const Loading: Story = {
    render: () => {
        const table = useReactTable({
            data: [],
            columns,
            getCoreRowModel: getCoreRowModel(),
        });

        return (
            <DataTable>
                {/* Header */}
                <DataTableHeader />
                {/* Body */}
                <DataTableBody
                    table={table}
                    isLoading={true}
                    isError={false}
                    refetchData={() => console.log('Refetch clicked')}
                    fallbackMessage="Data tidak ditemukan"
                    loaderMessage="Memuat data..."
                />
            </DataTable>
        );
    },
};

export const Error: Story = {
    render: () => {
        const table = useReactTable({
            data: [],
            columns,
            getCoreRowModel: getCoreRowModel(),
        });

        return (
            <DataTable>
                {/* Header */}
                <DataTableHeader />
                {/* Body */}
                <DataTableBody
                    table={table}
                    isLoading={false}
                    isError={true}
                    refetchData={() => console.log('Refetch clicked')}
                    fallbackMessage="Data tidak ditemukan"
                    loaderMessage="Memuat data..."
                />
            </DataTable>
        );
    },
};

export const Empty: Story = {
    render: () => {
        const table = useReactTable({
            data: [],
            columns,
            getCoreRowModel: getCoreRowModel(),
        });

        return (
            <DataTable>
                {/* Header */}
                <DataTableHeader />
                {/* Body */}
                <DataTableBody
                    table={table}
                    isLoading={false}
                    isError={false}
                    refetchData={() => console.log('Refetch clicked')}
                    fallbackMessage="Data tidak ditemukan"
                    loaderMessage="Memuat data..."
                />
                {/* Footer */}
                <DataTablePagination pagination={mockPagination} />
            </DataTable>
        );
    },
};

export const WithAddButton: Story = {
    render: () => {
        const table = useReactTable({
            data: simpleData,
            columns,
            getCoreRowModel: getCoreRowModel(),
        });

        return (
            <DataTable>
                {/* Header */}
                <DataTableHeader
                    onAddClick={() => console.log('Add button clicked')}
                />
                {/* Body */}
                <DataTableBody
                    table={table}
                    isLoading={false}
                    isError={false}
                    refetchData={() => console.log('Refetch clicked')}
                    fallbackMessage="Data tidak ditemukan"
                    loaderMessage="Memuat data..."
                />
                {/* Footer */}
                <DataTablePagination pagination={mockPagination} />
            </DataTable>
        );
    },
};
