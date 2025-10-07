// auth.js
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"; // ✅ must exist

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // ✅ Connect to DB
        const usersCollection = await dbConnect(collectionNamesObj.usersCollection);
        const user = await usersCollection.findOne({ email: credentials.email });

        if (!user) throw new Error("No user found with this email");
        if (credentials.password !== user.password)
          throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.AUTH_SECRET, // ✅ must be in your .env.local
});
