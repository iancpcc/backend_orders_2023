import { INotify } from '@service/utils/INotify/index';
import { UserEntity } from '@domain/entity/UserEntity';

export class OneSignalService implements INotify{
    async notifyByEmail(): Promise<any> {
        return "Email enviado ..."
    }
    async notifyToUser(id: number): Promise<any> {
        console.log('Notificacion enviada');
       return "Notificacion enviada ...";
    }
    async notifyToAllUsers(users: UserEntity[]): Promise<any> {
        return "Notificacion enviada a todos los usuarios"
    }

}