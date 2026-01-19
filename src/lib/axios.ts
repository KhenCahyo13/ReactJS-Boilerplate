import axios, {
    type AxiosError,
    type AxiosInstance,
    type AxiosRequestConfig,
} from 'axios';
import type { Token } from '@/types/auth';
import { useAuthStore } from '@/stores/auth-store';

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL as string;
const REFRESH_TOKEN_URL = '/auth/refresh';

export const publicApi: AxiosInstance = axios.create({
    baseURL: BASE_API_URL,
});

export const authenticatedApi: AxiosInstance = axios.create({
    baseURL: BASE_API_URL,
});

authenticatedApi.interceptors.request.use((config) => {
    const { tokens } = useAuthStore.getState();

    if (tokens?.access_token) {
        config.headers = config.headers ?? {};
        (config.headers as Record<string, string>).Authorization =
            `Bearer ${tokens.access_token}`;
    }

    return config;
});

let refreshingPromise: Promise<Token | null> | null = null;

async function refreshAccessToken(): Promise<Token | null> {
    const { tokens } = useAuthStore.getState();

    if (!tokens?.refresh_token) return null;

    try {
        const response = await publicApi.post<Token>(
            REFRESH_TOKEN_URL,
            {
                refresh_token: tokens.refresh_token,
            },
            {
                headers: {
                    Authorization: `Bearer ${tokens.refresh_token}`,
                },
            }
        );
        return response.data;
    } catch {
        return null;
    }
}

function ensureRefresh(): Promise<Token | null> {
    if (!refreshingPromise) {
        refreshingPromise = refreshAccessToken().finally(() => {
            refreshingPromise = null;
        });
    }
    return refreshingPromise;
}

authenticatedApi.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const status = error.response?.status;
        const originalRequest = error.config as AxiosRequestConfig & {
            _retry?: boolean;
        };

        if (status === 401 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newTokens = await ensureRefresh();
                if (!newTokens) {
                    useAuthStore.getState().clearAuth();
                    return Promise.reject(error);
                }

                useAuthStore.getState().setTokens(newTokens);

                originalRequest.headers = originalRequest.headers ?? {};
                (
                    originalRequest.headers as Record<string, string>
                ).Authorization = `Bearer ${newTokens.access_token}`;

                return authenticatedApi.request(originalRequest);
            } catch (refreshErr) {
                useAuthStore.getState().clearAuth();
                return Promise.reject(refreshErr);
            }
        }

        return Promise.reject(error);
    }
);