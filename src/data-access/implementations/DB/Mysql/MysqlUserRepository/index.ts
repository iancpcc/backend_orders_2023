import { Role } from '@domain/entity/RoleEntity/index';
import { SequelizeDB } from '@driven-adapters/DB/Sequalize/connection';
import { UserEntity } from '@domain/entity/UserEntity/index';
import { UserInfo } from "@entity/UserEntity";
import { UserModel } from "@data-access/driven-adapters/DB/Sequalize/models/UserModel";
import { UserRepository } from '@repository/UserRepository/index';

export class MysqlUserRepository implements UserRepository {
    getAllUsersByRole(role: number): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    private readonly db = SequelizeDB.init();

    async getUserById(id: number): Promise<UserEntity | null> {
        const user = await UserModel.findByPk(id, { raw: true });
        if (!user) {
            return null;
        }
        return user;

    }
    async getUserAdmin(): Promise<UserEntity | null> {
        const user = await UserModel.findOne({ where: { role: Role.ADMIN_ROLE }, raw: true });
        if (!user) {
            return null;
        }
        return user;
    }

    getUserBySecureToken(token: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    async getUserByEmail(email: string): Promise<UserEntity | null> {
        const user = await UserModel.findOne({ where: { email } });
        if (!user) {
            return null;
        }
        return user;
    }

    getUserAddiontalInfo(id: number): Promise<UserInfo> {
        throw new Error("Method not implemented.");
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await UserModel.findAll({ raw: true });
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return await UserModel.create(user, { raw: true });
    }
    async saveAdditionalInfo(user: UserInfo): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    async update(user: UserEntity): Promise<UserEntity | null> {

        const [result] = await UserModel.update(user, {
            where: { id: user.id }
        })

        return result > 0 ? user : null;
    }
    async delete(id: number): Promise<boolean> {
        const result = await UserModel.destroy({ where: { id } });
        return result > 0;
    }




}