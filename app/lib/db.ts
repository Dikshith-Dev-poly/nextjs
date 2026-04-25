import { promises as fs } from "fs"
import path from "path"
import { User } from "@/types/users";


const dbPath = path.join(process.cwd(), "app", "data", "users.json");

export async function readUsers(): Promise<User[]> {
    const data = await fs.readFile(dbPath, "utf-8");
    if (data) return JSON.parse(data);
    return [];
}


export async function writeUsers(users: User[]) {
    await fs.writeFile(dbPath, JSON.stringify(users, null, 2));
}