import { UserEntity } from '@domain/entity/UserEntity';
import { UserRepository } from '@domain/repository/UserRepository';

export class UserService {
    private readonly userRepository: UserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async idUserExist(id: number): Promise<boolean> {
        const user = await this.userRepository.getUserById(id);
        return user !== null;
    }

    async emailAlreadyExists(email: string): Promise<boolean> {
        const user = await this.userRepository.getUserByEmail(email);
        return user !== null;
    }





}