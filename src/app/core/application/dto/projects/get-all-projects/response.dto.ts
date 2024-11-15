import { IProject } from "../../common/project.dto";

export interface IGetAllProjectsResponse {
    statusCode: number;
    message: string;
    data: IProject[];
    metadata: Metadata;
}

export interface Metadata {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}