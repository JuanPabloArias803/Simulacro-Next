import { IUser } from "../../common/user.dto";

export interface IGetAllUsersResponse {
    statusCode: number;
    message:    string;
    data:       IUser[];
}
