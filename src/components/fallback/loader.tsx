import { IconLoader2 } from '@tabler/icons-react';
import type { FC } from 'react';

export interface LoaderProps {
    label: string;
}

export const FallbackLoader: FC<LoaderProps> = ({ label }) => (
    <div className="flex flex-col items-center justify-center gap-2 h-24">
        <IconLoader2 className="animate-spin text-muted-foreground" />
        <span className="text-muted-foreground text-sm">{label}</span>
    </div>
);
