// Use process.env instead of import.meta.env for Node.js compatibility
export const SHARE_LINK_URL = (typeof process !== 'undefined' && process.env?.VITE_SHARE_LINK_URL) || 'https://dev-web-orix.vimo.vn';
export const MIN_AMOUNT_WITHDRAW = 100000;
