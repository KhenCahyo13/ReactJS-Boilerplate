import { TtTableCell } from "@/components/datatable/cell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatToLocalDateTime } from "@/lib/datetime";
import type { Post } from "@/types/post";
import { IconEye } from "@tabler/icons-react";
import type { ColumnDef } from "@tanstack/react-table";

export const createPostsTableColumns = (): ColumnDef<Post>[] => [
    {
        accessorKey: 'id',
        header: '#',
        cell: ({ row }) => {
            return (
                <div className="py-2">
                    <span>{row.index + 1}</span>
                </div>
            );
        },
    },
    {
        accessorKey: 'title',
        header: 'Title',
        cell: ({ row }) => {
            return (
                <TtTableCell>
                    <span>{row.original.title}</span>
                </TtTableCell>
            );
        },
    },
    {
        accessorKey: 'categories',
        header: 'Categories',
        cell: ({ row }) => {
            return (
                <TtTableCell>
                    {row.original.categories.map((category) => (
                        <Badge key={category} variant='outline'>{category}</Badge>
                    ))}
                </TtTableCell>
            );
        },
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const badgeVariants: Record<string, string> = {
                published: 'default',
                unpublished: 'destructive',
                draft: 'secondary',
            };

            return (
                <TtTableCell>
                    <Badge
                        variant={badgeVariants[row.original.status] as "default" | "destructive" | "secondary" | "outline"}
                        className="capitalize"
                    >
                        {row.original.status}
                    </Badge>
                </TtTableCell>
            );
        },
    },
    {
        accessorKey: 'created_at',
        header: 'Created At',
        cell: ({ row }) => {
            return (
                <TtTableCell>
                    <span>{formatToLocalDateTime(row.original.created_at)}</span>
                </TtTableCell>
            );
        },
    },
    {
        accessorKey: 'created_by',
        header: 'Created By',
        cell: ({ row }) => {
            return (
                <TtTableCell>
                    <span>{row.original.created_by}</span>
                </TtTableCell>
            );
        },
    },
    {
        accessorKey: 'id',
        header: 'Actions',
        cell: () => {
            return (
                <TtTableCell className='flex items-center gap-x-1'>
                    <Button size='icon'>
                        <IconEye />
                    </Button>
                </TtTableCell>
            );
        },
    }
];