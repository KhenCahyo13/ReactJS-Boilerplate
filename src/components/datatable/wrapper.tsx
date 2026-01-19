import type { FC } from "react";

import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types/component";

export const DataTable: FC<LayoutProps> = ({
    children,
    className
}) => (
    <div className={cn(
        'flex flex-col gap-6', className
    )}>
        {children}
    </div>
);