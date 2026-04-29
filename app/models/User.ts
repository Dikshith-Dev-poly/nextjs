import mongoose, { Schema, Document, Model } from "mongoose";


export interface IUser extends Document {
    name: string,
    email: string,
    deleted?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}


const userSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, "Invalid email"] },
    deleted: { type: Boolean, default: false }
}, { timestamps: true });



const User: Model<IUser> = (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", userSchema);
export default User;