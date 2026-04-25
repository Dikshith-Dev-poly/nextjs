import { error, success } from "@/controllers/UserControllers";
import { createUsers, getUsers } from "@/Services/userService";
import { validateUserInput } from "@/validators/userValidators";
import { NextRequest, NextResponse } from "next/server";



export async function GET(): Promise<NextResponse> {
    const users = await getUsers();
    return success(users);
}


export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body = await req.json();
        const validationError = validateUserInput(body);
        if (validationError) return error(validationError);

        const user = await createUsers(body);
        return success(user, 201);
    } catch (err: any) {
        if (err.message === "EMAIL_EXISTS") {
            return error("User Already Exist", 409);
        }
        return error("Internal Server Error", 500);
    }
}