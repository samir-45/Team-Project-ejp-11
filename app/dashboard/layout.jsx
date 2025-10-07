"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, User, Settings, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", href: "/dashboard", icon: <Home size={20} /> },
    { name: "User Dashboard", href: "/dashboard/user", icon: <User size={20} /> },
    { name: "Provider Dashboard", href: "/dashboard/provider", icon: <Settings size={20} /> },
    { name: "Admin Dashboard", href: "/dashboard/admin", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-orange-100">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-500 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8 text-gray-800">Dashboard</h1>
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 p-2 rounded-lg transition ${
                  pathname === item.href
                    ? "bg-orange-100 text-orange-600 font-semibold"
                    : "hover:bg-orange-100 text-zinc-800"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-2 p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-yellow-200 transition"
        >
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
