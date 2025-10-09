// actions/authActions.js
"use server"

import { signIn, signOut } from "@/auth"

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/" })
  console.log("Google sign-in initiated");
}

export async function logOut() {
  await signOut({ redirectTo: "/" })
}
