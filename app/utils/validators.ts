import { IUser } from "@/models/User";

const emailR = /^\S+@\S+\.\S+$/;

export function validateData(data: IUser): string | null {
    if (!data.name) {
        return "Name is required";
    }
    if (!data.email) {
        return "email is required";
    }

    if (!emailR.test(data.email)) {
        return "Invalid email";
    }

    return null;
}