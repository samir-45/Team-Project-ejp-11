"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const userRole = "user"; // later: get this from context, session, or API

  useEffect(() => {
    if (userRole === "admin") {
      router.push("/dashboard/admin");
    } else if (userRole === "provider") {
      router.push("/dashboard/provider");
    } else {
      router.push("/dashboard/user");
    }
  }, [router, userRole]);

  return (
    <div className="flex items-center justify-center min-h-screen text-lg font-semibold text-gray-700">
      Redirecting to your dashboard...
    </div>
  );
}
