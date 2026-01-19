import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { Token, User } from '@/types/auth';

interface AuthState {
    user: User | null;
    tokens: Token | null;
    setUser: (user: User | null) => void;
    setTokens: (tokens: Token | null) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                user: {} as User,
                tokens: null,
                setUser: (user) => set({ user }),
                setTokens: (tokens) => set({ tokens }),
                clearAuth: () => set({ user: null, tokens: null }),
            }),
            { name: import.meta.env.VITE_AUTH_STORAGE_KEY }
        )
    )
);
