import { IProject } from "../../common/project.dto";

export interface ICreateProjectResponse {
    statusCode: number;
    message: string;
    data: IProject;
}