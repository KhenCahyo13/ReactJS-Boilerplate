import type { FC } from 'react';

import { cn } from '@/lib/utils';

export interface FallbackImageProps {
    imagePath?: string;
    label: string;
    imageClassName?: string;
}

export const FallbackImageText: FC<FallbackImageProps> = ({
    imagePath,
    label,
    imageClassName,
}) => (
    <div className="flex flex-col gap-4 text-sm">
        {imagePath && (
            <img
                src={imagePath}
                alt="No Data"
                className={cn(
                    'mx-auto h-48 w-48 object-contain',
                    imageClassName
                )}
            />
        )}
        <p className="text-center text-muted-foreground">{label}</p>
    </div>
);
