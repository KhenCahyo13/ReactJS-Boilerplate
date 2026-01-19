import {
    flexRender,
    type Table as TanstackTableType,
} from '@tanstack/react-table';

import { FallbackAction } from '../fallback/action';
import { FallbackImageText } from '../fallback/image';
import { FallbackLoader } from '../fallback/loader';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';

export interface DataTableBodyProps<TTable> {
    table: TanstackTableType<TTable>;
    isLoading: boolean;
    isError: boolean;
    refetchData: () => void;
    fallbackMessage?: string;
    loaderMessage?: string;
}

export const DataTableBody = <TTable,>({
    table,
    isLoading,
    isError,
    refetchData,
    fallbackMessage = 'Data not found.',
    loaderMessage = 'Loading data...',
}: DataTableBodyProps<TTable>) => (
    <Table>
        <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </TableHead>
                        );
                    })}
                </TableRow>
            ))}
        </TableHeader>
        <TableBody>
            {isLoading ? (
                <TableRow>
                    <TableCell
                        colSpan={table.getHeaderGroups()[0].headers.length}
                        className="text-center py-8"
                    >
                        <FallbackLoader label={loaderMessage} />
                    </TableCell>
                </TableRow>
            ) : isError ? (
                <TableRow>
                    <TableCell
                        colSpan={table.getHeaderGroups()[0].headers.length}
                        className="text-center py-8"
                    >
                        <FallbackAction onAction={refetchData} />
                    </TableCell>
                </TableRow>
            ) : (
                <>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={
                                    table.getHeaderGroups()[0].headers.length
                                }
                                className="text-center py-8"
                            >
                                <FallbackImageText
                                    imagePath="/assets/ilustrations/empty.png"
                                    label={fallbackMessage}
                                />
                            </TableCell>
                        </TableRow>
                    )}
                </>
            )}
        </TableBody>
    </Table>
);
