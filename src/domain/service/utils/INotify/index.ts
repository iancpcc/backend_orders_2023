import { UserEntity } from '@entity/UserEntity';

export interface INotify {
    notifyByEmail(): Promise<any>
    notifyToUser(id: number): Promise<any>
    notifyToAllUsers(users: UserEntity[]): Promise<any>
    
}