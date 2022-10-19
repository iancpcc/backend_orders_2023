import { AuthException } from "@exception/AuthException";
import { ICryptography } from "@domain/service/utils/ICryptography";
import { INotify } from '@service/utils/INotify';
import { IToken } from "@domain/service/utils/IToken";
import { Role } from "@entity/RoleEntity";
import { UserEntity } from "@entity/UserEntity";
import { UserRepository } from '@repository/UserRepository';
import { UserService } from '@service/UserService';

export class AuthUseCase {
    private readonly userService: UserService;
    private readonly userRepository: UserRepository;
    private readonly criptoRepository: ICryptography;
    private readonly tokenRepository: IToken;
    private readonly notifyRepository: INotify;

    constructor({ userRepository, criptoRepository, notifyRepository, tokenRepository, }: {
        userRepository: UserRepository;
        criptoRepository: ICryptography;
        notifyRepository: INotify;
        tokenRepository: IToken;
    }
    ) {
        this.userRepository = userRepository;
        this.criptoRepository = criptoRepository;
        this.userService = new UserService(userRepository);
        this.tokenRepository = tokenRepository;
        this.notifyRepository = notifyRepository;
    }

    async loginWithCredentials(email: string, password: string): Promise<string> {

        const user = await this.userRepository.getUserByEmail(email);
        if (user === null) {
            throw new AuthException(`Este email: ${email} no existe `)
        }
        // Comparar la contraseña 

        const isValid = await this.criptoRepository.compare(password, user.password!);
        if (!isValid) {
            throw new AuthException(`Email y/o contraseña incorrectos`)
        }

        return await this.tokenRepository.createToken({ id: user.id, role: user.role });

    }

    async signUpAndNotify(user: UserEntity): Promise<UserEntity> {
        const existUser = await this.userService.emailAlreadyExists(user.email!);
        if (existUser) {
            throw new AuthException(`Este email: ${user.email} ya se encuentra registrado `)
        }
        if (user.id == Role.CUSTOMER_ROLE) {
            user.active = false;
        }
        //Encrypt password
        user.password = await this.criptoRepository.encrypt(user.password!);
        //Register new user
        const userCreated = await this.userRepository.save(user);
        //Get admin user
        const adminUser = await this.userRepository.getUserAdmin();
        //Send Notification to admin
        await this.notifyRepository.notifyToUser(adminUser?.id!);

        return userCreated;
    }




}