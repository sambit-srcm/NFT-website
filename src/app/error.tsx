"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/** Shown when a page fails. Header and footer stay. */
export default function ErrorPage({
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
    <main id="main-content" tabIndex={-1} className="py-section flex-1">
      <Container className="text-center">
        <div role="alert">
          <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px]">
            Something went wrong
          </h1>
          <p className="text-ink-subtle mt-4 text-lg">
            This page failed to load. Try again, or head back to the homepage.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button onClick={() => retry()}>Try again</Button>
          <Button href="/" variant="outline">
            Go home
          </Button>
        </div>
      </Container>
    </main>
  );
}
