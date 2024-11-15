import { IUser } from "../../common/user.dto";

export interface IRegisterUserRequest extends IUser{
    password: string
};