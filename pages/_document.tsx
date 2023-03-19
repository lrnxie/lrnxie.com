import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-50 text-neutral-900 transition-colors duration-200 dark:bg-[#0C0D0F] dark:text-neutral-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
