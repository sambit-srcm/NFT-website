import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Page not found — NFT Marketplace",
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="py-section flex-1">
      <Container className="text-center">
        <h1 className="font-display text-[28px] leading-tight font-semibold sm:text-[38px]">
          Page not found
        </h1>
        <p className="text-ink-subtle mt-4 text-lg">
          The page you are looking for does not exist or has moved.
        </p>
        <Button href="/" className="mt-8">
          Go home
        </Button>
      </Container>
    </main>
  );
}
