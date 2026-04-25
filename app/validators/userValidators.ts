import { User } from "@/types/users";

export function validateUserInput(data: User) {
    if (!data.name || typeof data.name !== "string") {
        return "Name is required"
    }


    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
        return "Invalid Email";
    }

    return null;
}