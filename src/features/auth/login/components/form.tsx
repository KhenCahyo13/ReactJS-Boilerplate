import { type FC, memo } from 'react';

import { TfSubmitButton } from '@/components/tanstack-form/button';
import { TfTextInput } from '@/components/tanstack-form/text-input';
import { FieldGroup } from '@/components/ui/field';

import type { LoginFormProps } from '../types';

const LoginForm: FC<LoginFormProps> = ({ form, isLoginLoading }) => (
    <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
        }}
    >
        <FieldGroup>
            <div className="flex flex-col items-center gap-1 text-center">
                <h1 className="text-2xl font-bold">Login to your Account</h1>
                <p className="text-muted-foreground text-sm">
                    Enter your email and your password to continue
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <TfTextInput
                    required
                    form={form}
                    name="email"
                    label="Email"
                    placeholder="Email"
                />
                <TfTextInput
                    required
                    form={form}
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                />
            </div>
            <TfSubmitButton isLoading={isLoginLoading}>Masuk</TfSubmitButton>
        </FieldGroup>
    </form>
);

export default memo(LoginForm);