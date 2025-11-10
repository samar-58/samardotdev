"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

export function GithubSection({ username }: { username: string }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
    <section className="screen-line-before screen-line-after border-x border-edge" id="github" aria-labelledby="github-title">
      <div className="screen-line-after px-4">
      </div>
      <div className="p-4">
        <div
          ref={scrollRef}
          className="overflow-x-auto bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[length:10px_10px] bg-center [--pattern-foreground:var(--color-white)]/5 rounded-lg p-4"
        >
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            blockMargin={3}
            blockSize={12}
            fontSize={11}
          />
        </div>
      </div>
    </section>
  );
}
