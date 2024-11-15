import { IUser } from "../../common/user.dto";

export interface IUpdateUserResponse {
    statusCode: number;
    message: string;
    data: IUser;
}