import type { FC } from "react";

import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types/component";

export const SheetContentLayout: FC<LayoutProps> = ({
    children,
    className
}) => (
    <div className={cn(
        'px-5 pb-4', className
    )}>
        {children}
    </div>
)