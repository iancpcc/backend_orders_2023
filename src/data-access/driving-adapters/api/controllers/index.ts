import { loginUser } from './auth/login.controller';
import { profileUser } from './user/profileUser.controller';
import { signUpUser } from './auth/signUp.controller';

export   {
    //Auth
    loginUser as loginUserController,
    signUpUser as signUpController,
    //Users
    profileUser as profileUserController,

}