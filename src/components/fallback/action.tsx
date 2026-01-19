import { IconRefresh } from '@tabler/icons-react';
import type { FC } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

export interface FallbackActionProps {
    imagePath?: string;
    onAction: () => void;
    actionLabel?: string;
    imageClassName?: string;
}

export const FallbackAction: FC<FallbackActionProps> = ({
    imagePath = '/assets/ilustrations/error.png',
    onAction,
    actionLabel = 'Coba Lagi',
    imageClassName,
}) => (
    <div className="flex flex-col items-center gap-4 text-sm">
        {imagePath && (
            <img
                src={imagePath}
                alt="No Data"
                className={cn(
                    'mx-auto h-72 w-72 object-contain',
                    imageClassName
                )}
            />
        )}
        <Button onClick={onAction} className="w-fit">
            <IconRefresh />
            {actionLabel}
        </Button>
    </div>
);
