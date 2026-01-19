export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Token {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
    refresh_expires_in: number;
}