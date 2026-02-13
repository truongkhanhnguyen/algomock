import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
