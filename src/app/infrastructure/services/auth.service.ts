import { PAuth } from "@/app/core/application/ports/auth.port";
import { PublicHTTPClient } from "../utils/public-http-client";
import { ILoginRequest } from "@/app/core/application/dto/auth/login/request.dto";
import { ILoginResponse } from "@/app/core/application/dto/auth/login/response.dto";

export class AuthService implements PAuth{
    private clientHttp:PublicHTTPClient;
    private basePath:string="auth";

    constructor(){
        this.clientHttp=new PublicHTTPClient();
    }

    async login(req:ILoginRequest):Promise<ILoginResponse>{
        return this.clientHttp.post<ILoginResponse,ILoginRequest>(`${this.basePath}/login`,req)
    }
}