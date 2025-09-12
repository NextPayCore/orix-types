export interface LoginReq {
    username: string;
    password: string;
    webNotificationToken?: string;
}
export interface SsoLoginData {
    token: string;
    email: string;
    employeeId: string;
    fullName: string;
}
export interface ChangePasswordReq {
    oldPassword: string;
    password: string;
    newPassword: string;
    userId: string;
}
export interface SsoConfigRes {
    autoSubmit?: boolean;
    callbackLoginApp?: string;
    callbackLoginWeb?: string;
    callbackLogoutApp?: string;
    callbackLogoutWeb?: string;
    domain: string;
    portal: string;
    reLogin?: boolean;
}
//# sourceMappingURL=authen.d.ts.map