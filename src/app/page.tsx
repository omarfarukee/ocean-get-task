import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-2">Welcome</h1>
          <p className="text-slate-300 text-lg">Secure Authentication Demo</p>
        </div>
        <div className="space-y-4">
          <p className="text-slate-400 max-w-md mx-auto">
            This is a Next.js application demonstrating secure authentication with middleware and HttpOnly cookies.
          </p>
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
}
