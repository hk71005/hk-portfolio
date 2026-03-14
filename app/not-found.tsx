import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-slate-50 mb-2">
        Page Not Found
      </h2>
      <p className="text-lg text-slate-400 mb-8">
        Looks like you swung into the wrong web 🕸️
      </p>
      
      {/* Notice how we use the Next.js <Link> component instead of an <a> tag */}
      <Link 
        href="/" 
        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-[#0a0a0b] transition-all duration-300 font-medium"
      >
        Return to Portfolio
      </Link>
    </main>
  );
}