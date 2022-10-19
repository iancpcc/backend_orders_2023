import { UserEntity } from "@entity/UserEntity"

export interface AuthRepository {
    signUp(user:UserEntity): Promise<UserEntity >

}