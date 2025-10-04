"use server";

import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    console.log("server", payload)
    const usersCollection = dbConnect
}