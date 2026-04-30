import User, { IUser } from "@/models/User";

export async function createUser(data: IUser) {
    return await User.create(data);
}

export async function deleteUser(data: { id: string }) {
    const user = await User.findById(data.id);
    if (!user || user.deleted) {
        throw new Error("User not found");
    }
    user.deleted = true;
    await user.save();
    return user;
}

interface guQueryI {
    page: number
    limit: number
    name: string | undefined
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