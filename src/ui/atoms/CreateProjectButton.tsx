'use client'

import { CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { IGetAllProjectsResponse } from "@/app/core/application/dto/projects/get-all-projects/response.dto";
import { useSession } from "next-auth/react";

const CreateProjectButton = () => {
    const { data: session } = useSession();
    const customSession=session as CustomSession;
    const token=customSession.user.token;

    async function handleClick(){
        // const response=await fetch('/api/projects/get-all-projects');
        // const responseData:IGetAllProjectsResponse= await response.json();
        // const projects=responseData.data;
        // console.log(projects);
    }
    return (
        <button className='py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600' onClick={()=>handleClick()}>Botón</button>
    );
};

export default CreateProjectButton;