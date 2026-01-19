import { create } from 'zustand';

import type { Filter } from '@/types/component';

interface DataTableState {
    openFiltersDialog: boolean;
    search: string;
    limit: number;
    page: number;
    filters: Filter[];
    setOpenFiltersDialog: (open: boolean) => void;
    setSearch: (search: string) => void;
    setLimit: (limit: number) => void;
    setPage: (page: number) => void;
    setFilters: (filters: Filter[]) => void;
    resetDataTable: () => void;
}

export const useDataTableStore = create<DataTableState>((set) => ({
    openFiltersDialog: false,
    search: '',
    limit: 10,
    page: 1,
    filters: [],
    setOpenFiltersDialog: (open: boolean) =>
        set(() => ({ openFiltersDialog: open })),
    setSearch: (search: string) => set(() => ({ search })),
    setLimit: (limit: number) => set(() => ({ limit })),
    setPage: (page: number) => set(() => ({ page })),
    setFilters: (filters: Filter[]) => set(() => ({ filters })),
    resetDataTable: () =>
        set(() => ({
            openFiltersDialog: false,
            search: '',
            limit: 10,
            page: 1,
            filters: [],
        })),
}));
