import { environment } from 'src/environments/environment';

export const BASE_URL = environment.backend;
export const LOGIN_PAGE_API = () => `${BASE_URL}/app/auth/github/page`;
export const LOGIN_API = () => `${BASE_URL}/app/auth/github`;
export const CHECK_ACCESS_API = () => `${BASE_URL}/app/auth/github/access`;
export const DELETED_SESSION_API = () => `${BASE_URL}/app/auth/github/delete-session`;

