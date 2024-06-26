export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface UrlResponse {
    longUrl: string;
    shortUrl: string;
    newUrl?: UrlResponse;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
