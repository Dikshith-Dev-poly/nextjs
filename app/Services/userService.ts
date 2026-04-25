import { readUsers, writeUsers } from "@/lib/db";
import { User } from "@/types/users";
import { randomUUID } from "crypto";


export async function getUsers() {
    const users = await readUsers();
    return users.filter((user) => !user.deleted);
}


export async function createUsers(data: User) {
    const users = await readUsers();


    const exist = users.some((u) => u.email === data.email);
    if (exist) throw new Error("EMAIL_EXISTS");


    const newUser: User = {
        id: randomUUID(),
        name: data.name,
        email: data.email,
        deleted: false,
        createdAt: new Date().toISOString()
    }

    users.push(newUser);
    await writeUsers(users);
    return newUser;
}


export async function updateUser(id: string, data: User) {
    const users = await readUsers();
    const user = users.find((u) => u.id === id && !u.deleted);
    console.log(user)

    if (!user) throw new Error("NOT_FOUND");


    if (data.name.trim()) user.name = data.name;

    await writeUsers(users);
    return user;
}


export async function deleteUser(id: string) {
    const users = await readUsers();

    const user = users.find((u) => u.id === id && !u.deleted);
    if (!user) throw new Error("NOT_FOUND");

    user.deleted = true;
    await writeUsers(users);
    return user;
}