import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
