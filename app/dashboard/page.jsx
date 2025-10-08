"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const router = useRouter();

  const { data: session, status } = useSession();

  // const userRole = session?.user?.role;

  useEffect(() => {

    if (status === "loading") return;

    const userRole = session?.user?.role || "user";


    if (userRole === "admin") {
      router.push("/dashboard/admin");
    } else if (userRole === "provider") {
      router.push("/dashboard/provider");
    } else {
      router.push("/dashboard/user");
    }
  }, [router, session, status]);

  return (
    <div className="flex items-center justify-center min-h-screen text-lg font-semibold text-gray-700">
      Redirecting to your dashboard...
    </div>
  );
}
