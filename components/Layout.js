import Head from "next/head";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-screen max-w-2xl mx-auto py-5 px-4">
      <Head>
        <title>Lauren Xie</title>
      </Head>

      <nav className="flex justify-end pt-5 pb-10">
        <button
          className="w-9 h-9 rounded-lg bg-gray-700 dark:bg-slate-200"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>

      <main className="flex flex-col justify-center">{children}</main>
    </div>
  );
}
