import mongoose, { Mongoose } from "mongoose"

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) throw new Error("Missing MONGO_URI");

declare global {
    var mongoose: {
        conn: Mongoose | null,
        promise: Promise<Mongoose> | null,
    }
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}


export default async function connectdb() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI!, { bufferCommands: false }).then((mongoose) => {
            console.log("Database connected-", new Date().toISOString());
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}