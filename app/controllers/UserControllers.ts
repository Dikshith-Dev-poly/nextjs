import { User } from "@/types/users";
import { NextResponse } from "next/server"



export function success(data: User | User[], status = 200) {
    return NextResponse.json({ success: true, data }, { status });
}

export function error(message: string, status = 400) {
    return NextResponse.json({ success: false, message }, { status });
}