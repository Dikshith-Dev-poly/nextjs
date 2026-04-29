import User, { IUser } from "@/models/User";

export async function createUser(data: IUser) {
    return await User.create(data);
}

interface guQueryI {
    page: number
    limit: number
    name: string
}

export async function getUsers({ page = 1, limit = 10, name }: guQueryI) {
    const skip = (page - 1) * limit;
    const query: { deleted: boolean, name?: string } = { deleted: false };
    if (name) {
        query.name = name;
    }

    const users = await User.find(query).skip(skip).limit(limit).lean();

    const total = await User.countDocuments(query);
    return {
        users, page, total, pages: Math.ceil(total / limit),
    }
}