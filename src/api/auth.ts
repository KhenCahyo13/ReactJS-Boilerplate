import type { LoginFormValues } from "@/features/auth/login/types";
import { publicApi } from "@/lib/axios";
import type { ApiResponse } from "@/types/api";
import type { Token, User } from "@/types/auth";

export const login = async (payload: LoginFormValues): Promise<ApiResponse<User, Token>> => {
    const response = await publicApi.post('/auth/login', payload);

    return response.data as ApiResponse<User, Token>;
}