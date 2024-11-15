import { ILoginRequest } from "../dto/auth/login/request.dto";
import { ILoginResponse } from "../dto/auth/login/response.dto";

export interface PAuth{
    /**
     * @param {ILoginRequest} email - User email
     * @param {ILoginRequest} password - User password
     * @returns {Promise<ILoginResponse>} - A promise that resolves with the response containing the token and user info.
     * @throws {Error} - Throws an error if the API call fails.
     */
    login(req:ILoginRequest):Promise<ILoginResponse>
}