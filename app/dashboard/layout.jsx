"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = session?.user?.role || "user"; // fallback

  // Role-specific menu items
  const roleMenus = {
    user: [
      { name: "Overview", href: "/dashboard/user" },
      { name: "Services", href: "/dashboard/user/services" },
      { name: "Bookings", href: "/dashboard/user/bookings" },
      { name: "Messages", href: "/dashboard/user/messages" },
      { name: "Reviews", href: "/dashboard/user/reviews" },
      { name: "Settings", href: "/dashboard/user/settings" },
    ],
    Service_provider: [
      { name: "Overview", href: "/dashboard/provider" },
      { name: "My Services", href: "/dashboard/provider/services" },
      { name: "Bookings", href: "/dashboard/provider/bookings" },
      { name: "Messages", href: "/dashboard/provider/messages" },
      { name: "Reviews", href: "/dashboard/provider/reviews" },
      { name: "Settings", href: "/dashboard/provider/settings" },
    ],
    admin: [
      { name: "Overview", href: "/dashboard/admin" },
      { name: "Accounts", href: "/dashboard/admin/accounts" },
      { name: "Services", href: "/dashboard/admin/services" },
      { name: "Bookings", href: "/dashboard/admin/bookings" },
      { name: "Reviews", href: "/dashboard/admin/reviews" },
      { name: "Messages", href: "/dashboard/admin/messages" },
      { name: "Settings", href: "/dashboard/admin/settings" },
    ],
  };

  const menuItems = roleMenus[role] || [];

  return (
    <div className="flex min-h-screen bg-orange-100">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-500 p-6 flex flex-col justify-between">
        <div>
          {/* Brand */}
          <div className="navbar-start my-2 w-full border-2 rounded-xl border-dashed">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-2 py-1"
            >
              <span className="text-xl font-extrabold tracking-tight">
                COMMSERVE
              </span>
              <span className="hidden sm:inline-flex items-center rounded-full border border-black px-2 py-0.5 text-xs text-black">
                pro
              </span>
            </Link>
          </div>


          {/* <h1 className="text-2xl font-bold mb-8 text-gray-800">
            {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
          </h1> */}


          <nav className="space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block p-2 rounded-lg transition ${pathname === item.href
                    ? "bg-orange-100 text-orange-600 font-semibold"
                    : "hover:bg-orange-100 text-zinc-800"
                  }`}
              >
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