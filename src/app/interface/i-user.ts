export interface IUser {
    id?: number;
    data?: object;
    message?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    name: string;
    phone: number;
    dob?: string;
    avatar?: string;
    sex?: string;
}
