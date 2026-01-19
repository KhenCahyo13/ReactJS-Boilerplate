import { IconGalaxy } from '@tabler/icons-react';
import type { FC } from 'react';

import { cn } from '@/lib/utils';
import type { LayoutProps } from '@/types/component';

interface AppLogoProps extends LayoutProps {
    isOnlyLogo?: boolean;
}

const AppLogo: FC<AppLogoProps> = ({ className, isOnlyLogo = false }) => (
    <div className={cn('flex justify-start items-center gap-3', className)}>
        <IconGalaxy />
        {!isOnlyLogo && <span className="font-semibold text-lg">React Boilerplate</span>}
    </div>
);

export default AppLogo;
