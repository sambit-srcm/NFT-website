"use client";

import { useEffect, useState } from "react";

import { CopyIcon } from "@/components/icons";

/** Shortens a wallet address the way the design shows it. */
function shorten(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  // Reset the confirmation so the button does not read "Copied" indefinitely.
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
      // Clipboard access can be denied or unavailable; leave the label alone
      // rather than claiming a copy that did not happen.
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="bg-surface hover:bg-surface-raised inline-flex items-center gap-3 rounded-[20px] px-5 py-3 font-mono text-sm transition-colors"
    >
      <span aria-hidden="true" className="text-brand">
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
