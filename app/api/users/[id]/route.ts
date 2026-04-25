import { success, error } from "@/controllers/UserControllers";
import { deleteUser, updateUser } from "@/Services/userService";
import { NextRequest, NextResponse } from "next/server";



export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
    try {
        const { id } = await params;
        const body = await req.json();
        const user = await updateUser(id, body);
        return success(user);
    } catch (err: any) {
        if (err.message === "NOT_FOUND") {
            return error("User Not Found", 404);
        }
        return error("Internal Error", 500);
    }
}



export async function DELETE(_req: NextResponse, { params }: { params: Promise<{ id: string }> }): Promise<NextResponse> {
    try {
        const { id } = await params;
        const user = await deleteUser(id);
        return success(user);
    } catch (err: any) {
        if (err.message === "NOT_FOUND") {
            return error("User not Found", 404);
        }
        return error("Internal Error", 500);
    }
}