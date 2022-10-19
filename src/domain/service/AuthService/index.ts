import { UserRepository } from '../../repository/UserRepository/index';

export class AuthService {

    constructor( private readonly userRepository:UserRepository
    ) {
        this.userRepository = userRepository;
    }

    


}