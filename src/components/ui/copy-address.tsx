"use client";

import { useEffect, useState } from "react";

import { CopyIcon } from "@/components/icons";

function shorten(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="bg-brand hover:bg-brand-strong text-ink inline-flex items-center gap-3 rounded-[20px] px-5 py-3 font-mono text-sm transition-colors"
    >
      <span aria-hidden="true">
        <CopyIcon />
      </span>
      <span>{shorten(address)}</span>
      <span className="sr-only">
        {copied ? "Wallet address copied" : `Copy wallet address ${address}`}
      </span>
      <span aria-hidden="true" className="text-ink-muted text-xs">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
