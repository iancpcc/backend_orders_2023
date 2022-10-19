import { UserEntity, UserInfo } from "@entity/UserEntity";

export interface UserRepository {
    getUserById(id: number): Promise<UserEntity | null>;
    getUserAdmin(): Promise<UserEntity | null>;
    getUserBySecureToken(token: string): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity | null>;
    getUserAddiontalInfo(id: number): Promise<UserInfo>;
    getAllUsers(): Promise<UserEntity[]>;
    getAllUsersByRole(role: number): Promise<UserEntity[]>;
    save(user: UserEntity): Promise<UserEntity>;
    saveAdditionalInfo(user: UserInfo): Promise<UserEntity>;
    update(user: UserEntity): Promise<UserEntity|null>;
    delete(id: number): Promise<boolean>;
}