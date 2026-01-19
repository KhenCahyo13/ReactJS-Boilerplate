import type { FC } from "react";

import { cn } from "@/lib/utils";
import type { LayoutProps } from "@/types/component";

interface ContentLayoutProps extends LayoutProps {
    title: string;
    description?: string;
}

const ContentLayout: FC<ContentLayoutProps> = ({
    children,
    className,
    title,
    description,
}) => (
    <div className={cn(
        'flex flex-col gap-y-8', className
    )}>
        <div className="flex flex-col gap-y-0.5">
            <h1 className="font-semibold text-lg">{title}</h1>
            {description && (
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
        {children}
    </div>
);

export default ContentLayout;