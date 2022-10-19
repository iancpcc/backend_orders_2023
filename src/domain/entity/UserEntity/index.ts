import { Role } from '@domain/entity/RoleEntity';

export interface UserEntity {
    id?: number;
    email?: string;
    password?: string;
    google?: boolean;
    active?: boolean;
    device?: string;
    role?: Role;

}

export class UserValue implements UserEntity {
    password: string;
    email: string;
    google: boolean;
    role: Role;
    active?: boolean;
    device?: string;

    constructor({ email, password, google, role }: { email: string; password: string; google?: boolean; role?: Role }) {
        this.email = email;
        this.password = password;
        this.google = google ?? false;
        this.role = role ?? Role.CUSTOMER_ROLE;
    }



}

export interface UserInfo {
    id?: (number | string);
    cityId?: (number | string);
    userId?: (number | string);
    ci_RUC?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    comments?: string;
}