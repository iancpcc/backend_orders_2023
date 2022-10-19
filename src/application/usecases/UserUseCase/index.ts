import { UserException, UserNotFoundException } from '@domain/exception/UserException/index';

import { UserEntity } from '@entity/UserEntity';
import { UserRepository } from '@repository/UserRepository/index';
import { UserService } from '@domain/service/UserService/index';

export class UserUseCase {
    private userService: UserService;
    constructor(
        private userRepository: UserRepository,
    ) {
        this.userRepository = userRepository;
        this.userService = new UserService(userRepository);
    }


    async findAllUsers(): Promise<UserEntity[] | []> {
        return await this.userRepository.getAllUsers();
    }

    async findUser(id: any): Promise<UserEntity | null> {
        const isIdValid = await this.userService.idUserExist(id);
        if (!isIdValid) {
            throw new UserException(`Usuario con id ${id} no existe`);
        }
        return await this.userRepository.getUserById(id);
    }

    async saveUser(user: UserEntity): Promise<UserEntity> {
        const emailExist = await this.userService.emailAlreadyExists(user.email!);
        if (emailExist) {
            throw new UserException(`Usuario con el correo ${user.email} ya existe `);
        }
        return await this.userRepository.save(user);
    }

    async deletUser(id: number): Promise<boolean> {
        const user = await this.userRepository.getUserById(id);
        if (!user === null) {
            throw new UserException(`Usuario con el id ${id} no existe `);
        }
        return await this.userRepository.delete(id);
    }

    async updateUser(user: UserEntity): Promise<UserEntity | null> {
        const userExist = await this.userRepository.getUserById(user.id!);
        if (userExist===null) {
            throw new UserNotFoundException("Usuario no encontrado")
        }

        const dataToUpdate: UserEntity = {
            id: user.id ?? userExist.id,
            email: user.email ?? userExist.email,
            password: user.password ?? userExist.password,
            role: user.role ?? userExist.role,
            google: user.google ?? userExist.google,
            active: user.active ?? userExist.active,
            device: user.device ?? userExist.device,
        }
        const userUpdated = await this.userRepository.update(dataToUpdate);
        if (userUpdated===null) {
            throw new UserException("Usuario no actualizado")
        }
        return userUpdated;
    }

}