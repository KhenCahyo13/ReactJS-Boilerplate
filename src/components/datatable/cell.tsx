import type { FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TtTableCellProps {
    className?: string;
    children: ReactNode;
}

export const TtTableCell: FC<TtTableCellProps> = ({ className, children }) => (
    <div className={cn('py-2', className)}>
        <span>{children}</span>
    </div>
);
