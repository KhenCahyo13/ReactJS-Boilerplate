import { z } from 'zod';

import type { LoginFormValues } from './types';

export const loginFormSchema = z.object({
    email: z.string().email('Email format is not valid'),
    password: z.string().min(6, 'Password must be more than 6 characters'),
});

export const loginFormDefaultValues: LoginFormValues = {
    email: '',
    password: '',
};