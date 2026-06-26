"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => (
    <div className="h-32 rounded-lg bg-[var(--surface)] animate-pulse" />
  ),
});

export function GithubSection({ username }: { username: string }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollToRightEdge = () => {
      const svg = container.querySelector("svg");
      let contentWidth = container.scrollWidth;
      try {
        if (svg) {
          const svgBox = (svg as SVGGraphicsElement).getBBox?.();
          const svgWidth =
            svgBox && Number.isFinite(svgBox.width)
              ? svgBox.width
              : svg.getBoundingClientRect().width;
          if (svgWidth && Number.isFinite(svgWidth)) {
            contentWidth = Math.max(contentWidth, svgWidth + 32);
          }
        }
      } catch {
        // ignore
      }
      const targetLeft = Math.max(0, contentWidth - container.clientWidth);
      container.scrollLeft = targetLeft;
    };

    const rafId = requestAnimationFrame(scrollToRightEdge);
    const t1 = setTimeout(scrollToRightEdge, 200);
    const t2 = setTimeout(scrollToRightEdge, 600);
    const t3 = setTimeout(scrollToRightEdge, 1200);

    const mutationObserver = new MutationObserver(scrollToRightEdge);
    mutationObserver.observe(container, { childList: true, subtree: true });

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scrollToRightEdge);
      resizeObserver.observe(container);
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      mutationObserver.disconnect();
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <motion.section
      id="pow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-[var(--border)]"
    >
      <h2 className="section-label">proof of work</h2>

      <div
        ref={scrollRef}
        className="overflow-x-auto rounded-xl p-4 bg-[var(--surface)] border border-[var(--border)]"
      >
        <GitHubCalendar
          username={username}
          colorScheme={resolvedTheme === "light" ? "light" : "dark"}
          blockMargin={3}
          blockSize={12}
          fontSize={11}
        />
      </div>
    </motion.section>
  );
}
