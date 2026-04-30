import { NextResponse } from "next/server";



export default function success(data: unknown, status = 200): NextResponse {
    return NextResponse.json({ success: true, data }, { status });
}