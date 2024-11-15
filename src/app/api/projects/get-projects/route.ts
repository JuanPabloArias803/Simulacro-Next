import { ProjectsService } from '@/app/infrastructure/services/projects.service';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const service=new ProjectsService;
        const projects = await service.getProjects();
        return NextResponse.json(projects, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}