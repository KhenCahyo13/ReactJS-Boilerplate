import type z from "zod";

import type { loginFormSchema } from "./schema";

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export interface LoginFormProps {
    form: ReturnType<typeof import("@tanstack/react-form").useForm<LoginFormValues>>;
    isLoginLoading: boolean;
}

export type LoginViewProps = LoginFormProps;