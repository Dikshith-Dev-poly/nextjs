import { NextResponse } from "next/server";



export default function error(message: string, status = 400): NextResponse {
    return NextResponse.json({ success: false, message }, { status });
}