"use client";

import { useEffect } from "react";

import "./globals.css";

/** Shown when the whole site fails to load. */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-canvas text-ink grid min-h-screen place-items-center p-6 text-center">
        <title>Something went wrong — NFT Marketplace</title>
        <main role="alert">
          <h1 className="text-[28px] font-semibold">Something went wrong</h1>
          <p className="text-ink-subtle mt-4">The site failed to load. Please try again.</p>
          <button
            type="button"
            onClick={() => retry()}
            className="bg-brand hover:bg-brand-strong mt-8 rounded-[20px] px-6 py-3 font-semibold"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
