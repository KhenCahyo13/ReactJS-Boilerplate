import { type FC,memo } from "react";

import { DataTableBody } from "@/components/datatable/body";
import { DataTableHeader } from "@/components/datatable/header";
import { DataTablePagination } from "@/components/datatable/pagination";
import { DataTable } from "@/components/datatable/wrapper";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { dummyCategories, postsPagination } from "../dummy";
import type { PostsDataTableProps } from "../types";

const PostsDataTable: FC<PostsDataTableProps> = ({
    table,
    isPostsLoading,
    isPostsError,
    refetchPosts,
}) => (
    <DataTable>
        {/* Header */}
        <DataTableHeader
            addAsLink='create'
            filtersContent={
                <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Field>
                            <FieldLabel>Category</FieldLabel>
                            <Select
                                value={''}
                                onValueChange={() => { }}
                            >
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {dummyCategories.map((item) => (
                                        <SelectItem key={item} value={item}>
                                            {item}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => { }} variant="secondary">
                            Reset
                        </Button>
                        <Button onClick={() => { }}>Apply</Button>
                    </DialogFooter>
                </>
            }
        />
        {/* Body */}
        <DataTableBody
            table={table}
            isLoading={isPostsLoading}
            isError={isPostsError}
            refetchData={refetchPosts}
            fallbackMessage="Posts data not found."
            loaderMessage="Loading posts data..."
        />
        {/* Footer */}
        {!isPostsLoading && !isPostsError && (
            <DataTablePagination pagination={postsPagination} />
        )}
    </DataTable>
);

export default memo(PostsDataTable);