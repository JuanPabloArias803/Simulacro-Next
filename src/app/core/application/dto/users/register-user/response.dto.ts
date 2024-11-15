import { IUser } from "../../common/user.dto";

export interface IRegisterUserResponse {
    statusCode: number;
    message: string;
    data: IUser;
}