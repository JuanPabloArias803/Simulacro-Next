import { IProject } from "../../common/project.dto";

export interface IUpdateProjectResponse {
    statusCode: number;
    message: string;
    data: IProject;
}