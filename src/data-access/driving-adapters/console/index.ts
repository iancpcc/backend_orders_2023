import 'module-alias/register';

import { UserEntity, UserValue } from '@entity/UserEntity';

import { AuthUseCase } from '@usecases/AuthUseCase';
import { BcryptService } from '../api/utils/BcryptService/index';
import { JwtService } from '../api/utils/JwtService/index';
import { OneSignalService } from '../api/utils/OneSignalService/index';
import { Role } from '@domain/entity/RoleEntity';
import { SequelizeDB } from '@driven-adapters/DB/Sequalize/connection';
import { UserImpMysql } from '@data-access/implementations/DB/Mysql/MysqlUserRepository';
import { UserUseCase } from '@usecases/UserUseCase';

(async () => {  
    console.log('Conectando BD...');

    await SequelizeDB.connected();

    console.log("Iniciando consola.....");
    const user: UserEntity = new UserValue({ email: `ian@gmail.com`, password: "12345678", role: Role.CUSTOMER_ROLE });
    const userRepository = new UserImpMysql();
    const authUseCase = new AuthUseCase({ userRepository, criptoRepository: new BcryptService(),notifyRepository: new OneSignalService(),tokenRepository: new JwtService(),});
    const userUseCase = new UserUseCase(userRepository);

    console.log('Creando usuario...');
    // const userCreated = await authUseCase.signUpAndNotify(user);
    // console.log('Usuario creado',userCreated);
    console.log('Loguendose...');
    const tokenAccess = await authUseCase.loginWithCredentials("ian@gmail.com", "12345678");
    console.log('Obteniendo token..', tokenAccess);
    // console.log('Obteniendo usuarios...');
    // let usersFetched = await userUseCase.findAllUsers();

    // console.log(usersFetched);
    // // const userData:UserEntity={};
    // console.log('Actualizando usuario..');
    // user.id = 23;
    // user.email = undefined
    // user.password = "111111111"
    // console.log('User', user);
    // const userUpdated = await userUseCase.updateUser(user);

    // console.log('Usuario actualizado', userUpdated);

    // console.log('Obteniendo usuarios...');

    // usersFetched = await userUseCase.findAllUsers();
    // console.log(usersFetched);

    // setTimeout(async () => {
    //     console.log('Eliminando usuario');

    //     const isDeleted = await userUseCase.deletUser(23);
    //     console.log(isDeleted);
    //     console.log('Obteniendo usuarios...');

    //     usersFetched = await userUseCase.findAllUsers();
    //     console.log(usersFetched);
    // }, 4000);



})();