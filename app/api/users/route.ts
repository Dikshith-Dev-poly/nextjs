import { createUserController, getUserController } from "@/controllers/userControllers";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest): Promise<NextResponse> {
    return getUserController(req);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    return createUserController(req);
}

