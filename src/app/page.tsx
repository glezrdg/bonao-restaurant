export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Construction Icon */}
        <div className="animate-float mb-8">
          <div className="relative">
            <svg
              className="w-24 h-24 text-amber-600 dark:text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full animate-pulse-glow" />
          </div>
        </div>

        {/* Restaurant Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
            Bonao
          </span>
          <br />
          <span className="text-3xl md:text-4xl font-light text-stone-700 dark:text-stone-300">
            Restaurant
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600/50" />
          <svg
            className="w-6 h-6 text-amber-600 dark:text-amber-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600/50" />
        </div>

        {/* Under Construction Message */}
        <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-800/50 mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Under Construction
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-stone-800 dark:text-stone-100">
            Something Delicious is Cooking!
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-md mx-auto">
            We&apos;re working hard to bring you an unforgettable dining experience
            with authentic Dominican flavors. Our website is currently under construction,
            but great things are on the way!
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-stone-600 dark:text-stone-400">
          <a
            href="mailto:info@bonaorestaurant.com"
            className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            info@bonaorestaurant.com
          </a>
          <span className="hidden sm:block text-stone-300 dark:text-stone-600">|</span>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (123) 456-7890
          </a>
        </div>

        {/* Social Links Placeholder */}
        <div className="flex items-center gap-4 mt-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center text-xs text-stone-500 dark:text-stone-500">
        <p>&copy; {new Date().getFullYear()} Bonao Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
