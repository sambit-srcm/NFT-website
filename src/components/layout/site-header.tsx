"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CloseIcon, LogoMark, MenuIcon, UserIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Rankings", href: "#rankings" },
  { label: "Connect a wallet", href: "/connect-wallet" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // The drawer is an overlay, so the page behind it must not scroll with it.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape is the expected way out of an overlay menu.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="bg-canvas/95 sticky top-0 z-50 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6 lg:h-[88px]">
        <Link
          href="/"
          className="font-display flex items-center gap-3 text-lg font-bold sm:text-[22px]"
        >
          <LogoMark className="text-brand" />
          <span>NFT Marketplace</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand text-base font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/create-account" icon={<UserIcon />}>
            Sign Up
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="hover:text-brand p-2 transition-colors lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface absolute inset-x-0 top-full border-t border-white/5 lg:hidden"
          >
            <Container className="flex flex-col gap-2 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-surface-raised rounded-xl px-3 py-3 text-lg font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/create-account" icon={<UserIcon />} fullWidth className="mt-2">
                Sign Up
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
