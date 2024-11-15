import { IUser } from "./user.dto";

export interface IProject {
    id?: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    isActive?: boolean;
    organizer?: IUser;
}