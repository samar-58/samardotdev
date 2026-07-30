import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <main className="grain flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        404
      </p>
      <h1 className="font-display text-4xl text-foreground">
        this page doesn&apos;t exist
      </h1>
      <Link
        href="/"
        className="mt-2 font-mono text-sm text-accent link-hover"
      >
        back home
      </Link>
    </main>
  );
}
