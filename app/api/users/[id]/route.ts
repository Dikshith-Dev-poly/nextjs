import { deleteUserController } from "@/controllers/userControllers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
    const { id } = await params;
    return deleteUserController(req, id);
}