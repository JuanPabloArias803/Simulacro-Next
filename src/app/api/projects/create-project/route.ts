import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    // try {
    //     const service=new ProjectsService;
    //     const createProject = await service.createProject({},);
    //     return NextResponse.json(projects, { status: 201 });
    // } catch (error) {
    //     return NextResponse.json({ message: error }, { status: 500 });
    // }
}