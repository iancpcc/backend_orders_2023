export enum Role {
    ADMIN_ROLE = 1,
    CUSTOMER_ROLE = 2,
}

export interface RoleEntity {
    id?: number,
    role?: string,
}