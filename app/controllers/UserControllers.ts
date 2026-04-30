import connectdb from "@/lib/db";
import { createUser, deleteUser, getUsers } from "@/services/userService";
import error from "@/utils/errorRes";
import { rateLimiter } from "@/utils/rateLimiter";
import success from "@/utils/success";
import { validateData } from "@/utils/validators";
import { NextRequest, NextResponse } from "next/server";




export async function getUserController(req: NextRequest): Promise<NextResponse> {
    await connectdb();
    const ip = req.headers.get("x-forwarded-for") || "local";
    if (!rateLimiter(ip)) {
        return error("To many requests", 429);
    }

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "4");
    const name = searchParams.get("name") || undefined;

    try {
        const users = await getUsers({ page, limit, name })
        return success(users);
    } catch (_err) {
        return error("Failed to fetch users");
    }
}


export async function createUserController(req: NextRequest) {
    await connectdb();
    const ip = req.headers.get("x-forwarded-for") || "local";
    if (!rateLimiter(ip)) {
        return error("To many requests", 429);
    }

    try {
        const body = await req.json();
        const notValidate = validateData(body);
        if (notValidate) {
            return error(notValidate, 400);
        }


        const user = await createUser(body);
        return success(user, 201);
    } catch (err: unknown) {
        if (typeof err === "object" && err != null && "code" in err) {
            if (err.code === 11000) {
                return error("Email already exist", 409);
            }
        }
        return error("Failed to create user");
    }
}


export async function deleteUserController(req: NextRequest, id: string): Promise<NextResponse> {
    await connectdb();
    const ip = req.headers.get("x-forwarded-for") || "local";
    if (!rateLimiter(ip)) {
        return error("To many requests", 429);
    }
    try {
        const user = await deleteUser({ id });
        return success(user, 200);
    } catch (err: unknown) {
        if (typeof err === "object" && err && "message" in err) {
            return error(err.message as string, 404);
        }
        return error("Something went wrong", 500);
    }
}