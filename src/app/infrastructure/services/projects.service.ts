import { IGetAllProjectsResponse } from "@/app/core/application/dto/projects/get-all-projects/response.dto";
import { PrivateHTTPClient } from "../utils/private-http-client";
import { PublicHTTPClient } from "../utils/public-http-client";
import { ICreateProjectRequest } from "@/app/core/application/dto/projects/create-project/request.dto";
import { ICreateProjectResponse } from "@/app/core/application/dto/projects/create-project/response.dto";
import { IUpdateProjectRequest } from "@/app/core/application/dto/projects/update-project/request.dto";
import { IUpdateProjectResponse } from "@/app/core/application/dto/projects/update-project/response.dto";
import { IDeleteProjectsResponse } from "@/app/core/application/dto/projects/delete-project/response.dto";

export class ProjectsService{
    private PublicClientHttp:PublicHTTPClient;
    private PrivateClientHttp:PrivateHTTPClient;
    private basePath:string="projects";

    constructor(){
        this.PrivateClientHttp=new PrivateHTTPClient();
        this.PublicClientHttp=new PublicHTTPClient();
    }

    async getProjects():Promise<IGetAllProjectsResponse>{
        return this.PublicClientHttp.get<IGetAllProjectsResponse>(`${this.basePath}`)
    }

    async createProject(req:ICreateProjectRequest,token:string):Promise<ICreateProjectResponse>{
        return this.PrivateClientHttp.post(`${this.basePath}`,token,req)
    }

    async updateProject(req:IUpdateProjectRequest,token:string,projectID:string):Promise<IUpdateProjectResponse>{
        return this.PrivateClientHttp.patch(`${this.basePath}/${projectID}`,token,req)
    }

    async deleteProject(token:string,projectID:string):Promise<IDeleteProjectsResponse>{
        return this.PrivateClientHttp.delete(`${this.basePath}/${projectID}`,token)
    }
}