export interface IUser {
    sub?: string;
    email: string;
    password?: string;
    name: string;
    role: Role;
    photo: null | string;
}

export enum Role {
    Organizer = "organizer",
    Volunteer = "volunteer",
}