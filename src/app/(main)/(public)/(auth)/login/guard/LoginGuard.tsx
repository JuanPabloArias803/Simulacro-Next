"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginGuard({children}:{children:React.ReactNode}){

    const {data,status}=useSession();
    const router=useRouter();
    console.log(data,status);

    useEffect(()=>{
        if(status==="authenticated"){
            router.push("/dashboard/projects");
        }
    },[status,router]);

    if(status==="unauthenticated"){
        return(<>{children}</>)
    }

    if(status==="loading"){
        return(<h1>Cargando...</h1>)
    }
}