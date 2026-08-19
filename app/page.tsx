import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Main Glassmorphism Card */}
      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl shadow-2xl sm:p-12">
        {/* Badge / Status */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-medium text-sky-300">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          Sistem Manajemen Inventaris
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Selamat Datang di <br />
          <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Aplikasi Inventaris Barang
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-lg text-sm text-slate-300 sm:text-base leading-relaxed">
          Kelola aset, lacak kondisi barang, dan rekap data operasional secara efisien, praktis, dan real-time dalam satu platform.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex w-full justify-center">
          <Link
            href="/login"
            className="group relative flex h-12 w-full max-w-xs items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-6 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/40 active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Masuk ke Halaman Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Quick Feature Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Manajemen Cepat
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Export PDF & CSV
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Akses Operator
          </span>
        </div>
      </main>
    </div>
  );
}