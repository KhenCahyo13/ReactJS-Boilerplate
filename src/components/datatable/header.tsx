import { IconFilter, IconPlus } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import type { FC, ReactNode } from 'react';

import { useDataTableStore } from '@/stores/datatable-store';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { Separator } from '../ui/separator';

export interface DataTableHeaderProps {
    filtersContent?: ReactNode;
    onAddClick?: () => void;
    addAsLink?: string;
}

export const DataTableHeader: FC<DataTableHeaderProps> = ({
    filtersContent,
    onAddClick,
    addAsLink,
}) => {
    const {
        openFiltersDialog,
        search,
        limit,
        filters,
        setOpenFiltersDialog,
        setSearch,
        setLimit,
    } = useDataTableStore();

    return (
        <div className="flex items-center gap-x-2 md:justify-between">
            <Input
                type="text"
                placeholder="Cari data..."
                className="max-w-64 lg:max-w-82"
                value={search}
                onChange={(e) => setSearch(e?.target.value)}
            />
            <div className="flex items-center gap-x-2">
                <Select
                    value={limit.toString()}
                    onValueChange={(value) => setLimit(Number(value))}
                >
                    <SelectTrigger className="w-fit">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {[10, 20, 30, 40, 50].map((value) => (
                            <SelectItem key={value} value={value.toString()}>
                                {value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {filtersContent && (
                    <>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setOpenFiltersDialog(true)}
                            className="relative"
                        >
                            <IconFilter />
                            {filters.length > 0 && (
                                <div className="w-3 h-3 rounded-full bg-destructive absolute -top-0.5 right-0 animate-pulse"></div>
                            )}
                        </Button>
                        <Dialog
                            open={openFiltersDialog}
                            onOpenChange={setOpenFiltersDialog}
                        >
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Filter</DialogTitle>
                                </DialogHeader>
                                <Separator />
                                {filtersContent}
                            </DialogContent>
                        </Dialog>
                    </>
                )}
                {(onAddClick || addAsLink) && (
                    <>
                        {onAddClick ? (
                            <Button size="sm" onClick={onAddClick}>
                                <IconPlus />
                                <span className="hidden md:block">Buat Baru</span>
                            </Button>
                        ) : (
                            <Button size="sm" asChild>
                                <Link to={addAsLink!}>
                                    <IconPlus />
                                    <span className="hidden md:block">Buat Baru</span>
                                </Link>
                            </Button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
