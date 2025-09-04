import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 text-white px-4 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-5xl font-extrabold tracking-tight">Parichuk.com</h1>
        <p className="mt-4 text-xl text-white/90 dark:text-slate-300">
          Личный сайт. Скоро здесь будет больше.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@parichuk.com"
            className="inline-block rounded-2xl bg-white/10 px-6 py-3 text-lg font-medium hover:bg-white/20 border border-white/30 shadow"
          >
            Связаться
          </a>
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="inline-block rounded-2xl bg-white/10 px-6 py-3 text-lg font-medium hover:bg-white/20 border border-white/30 shadow"
          >
            {darkMode ? 'Светлая тема' : 'Тёмная тема'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}