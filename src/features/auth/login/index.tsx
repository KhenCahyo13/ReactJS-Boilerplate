import { useForm } from '@tanstack/react-form';

import { loginFormDefaultValues, loginFormSchema } from './schema';
import LoginView from './view';
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/stores/auth-store';
import { useMutation } from '@tanstack/react-query';
import type { LoginFormValues } from './types';
import { login } from '@/api/auth';
import { useAlertDialogStore } from '@/stores/alert-dialog-store';

const Login = () => {
    const navigate = useNavigate();
    const { setUser, setTokens } = useAuthStore();
    const { showError } = useAlertDialogStore();

    const mutation = useMutation({
        mutationFn: (payload: LoginFormValues) => login(payload),
    });

    const form = useForm({
        defaultValues: loginFormDefaultValues,
        validators: {
            onSubmit: loginFormSchema
        },
        onSubmit: async ({ value }) => {
            mutation.mutate(value, {
                onSuccess: (data) => {
                    if (data.success) {
                        setUser(data.data);
                        setTokens(data.meta ?? null);
                        navigate({ to: '/login' });
                    } else {
                        showError('Login Failed', data.message || "Login failed. Please check your credentials and try again.");
                    }
                },
                onError: () => {
                    showError('Login Failed', "Login failed. Please check your credentials and try again.");
                }
            })
        }
    });

    return <LoginView form={form} isLoginLoading={mutation.isPending} />;
};

export default Login;