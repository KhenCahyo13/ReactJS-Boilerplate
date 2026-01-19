import { type FC, memo } from 'react';

import LoginForm from './components/form';
import type { LoginViewProps } from './types';
import { IconGalaxy } from '@tabler/icons-react';

const LoginView: FC<LoginViewProps> = ({ form, isLoginLoading }) => (
    <div className="grid min-h-svh lg:grid-cols-2">
        <div className="relative hidden lg:block">
            <img
                src="/assets/ilustrations/auth.png"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="#" className="flex items-center gap-2 font-medium">
                    <IconGalaxy />
                    React Boilerplate
                </a>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    <LoginForm form={form} isLoginLoading={isLoginLoading} />
                </div>
            </div>
        </div>
    </div>
);

export default memo(LoginView);