// components/Nav.jsx  (Server Component)
import { auth } from "@/auth"
import NavClient from "./NavClient"

export default async function Nav() {
  const session = await auth()
  return <NavClient session={session} />
}
