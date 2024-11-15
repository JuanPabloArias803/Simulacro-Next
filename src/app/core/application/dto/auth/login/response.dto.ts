import { IUser } from "../../common/user.dto";

export interface ILoginResponse {
    statusCode: number;
    message: string;
    data: Data;
}

export interface Data {
    access_token: string;
    user: IUser;
}