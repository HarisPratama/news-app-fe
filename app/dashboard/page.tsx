"use client"

import {useRouter} from "next/navigation";
import {getCookie} from "cookies-next";
import {useEffect} from "react";

export default function Dashboard(){
    const router = useRouter();

    useEffect(() => {
        const token = getCookie("accessToken");

        if (!token) {
            router.push("/login");
        }
    }, [])

    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    )
}