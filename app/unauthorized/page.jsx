import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-red-600 font-bold text-xl">
      🚫 You are not authorized to view this page.
      <Link className="ml-4 text-blue-500 underline" href="/dashboard">
        Go back to Dashboard
      </Link>
    </div>
  );
}