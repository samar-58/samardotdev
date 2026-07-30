import { siteConfig } from "@/lib/data";
import { getContributions } from "@/lib/github";

const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function Contributions() {
  const data = await getContributions(siteConfig.githubUsername);

  return (
    <section id="pow" className="py-14 border-t border-border">
      <div className="flex items-baseline justify-between gap-4 mb-8">
        <h2 className="section-label">proof of work</h2>
        {data && (
          <p className="font-mono text-xs text-muted-foreground tabular-nums">
            {data.total.toLocaleString()} contributions
          </p>
        )}
      </div>

      {!data ? (
        <p className="text-sm text-muted-foreground">
          contribution data is unavailable right now —{" "}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-foreground"
          >
            view it on github
          </a>
        </p>
      ) : (
        <>
          {/* dir=rtl parks the horizontal scroll at the most recent week without JS */}
          <div
            className="max-w-full overflow-x-auto pb-2"
            dir="rtl"
            tabIndex={0}
            role="group"
            aria-label="Contribution graph, scroll horizontally to see earlier weeks"
          >
            <div dir="ltr" className="flex w-fit gap-2">
              <div
                className="grid shrink-0 pt-[14px]"
                style={{
                  gridTemplateRows: "repeat(7, 10px)",
                  rowGap: "2px",
                }}
                aria-hidden="true"
              >
                {WEEKDAY_LABELS.map((label, i) => (
                  <span
                    key={i}
                    className="font-mono text-[9px] leading-[10px] text-muted-foreground pr-1"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="relative shrink-0">
                <div
                  className="grid mb-1"
                  style={{
                    gridTemplateColumns: `repeat(${data.weeks.length}, 10px)`,
                    columnGap: "2px",
                  }}
                  aria-hidden="true"
                >
                  {data.months.map((month) => (
                    <span
                      key={`${month.label}-${month.weekIndex}`}
                      className="font-mono text-[9px] leading-none text-muted-foreground whitespace-nowrap"
                      style={{ gridColumnStart: month.weekIndex + 1 }}
                    >
                      {month.label}
                    </span>
                  ))}
                </div>

                <div
                  className="grid grid-flow-col"
                  style={{
                    gridTemplateRows: "repeat(7, 10px)",
                    gridTemplateColumns: `repeat(${data.weeks.length}, 10px)`,
                    gap: "2px",
                  }}
                  role="img"
                  aria-label={`GitHub contribution graph: ${data.total.toLocaleString()} contributions in the last year`}
                >
                  {data.weeks.flatMap((week, w) =>
                    week.map((day, d) =>
                      day ? (
                        <span
                          key={day.date}
                          title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                          className="rounded-[2px]"
                          style={{
                            backgroundColor: `var(--graph-${day.level})`,
                          }}
                        />
                      ) : (
                        <span key={`blank-${w}-${d}`} />
                      )
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-1.5">
            <span className="font-mono text-[9px] text-muted-foreground mr-1">
              less
            </span>
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className="w-[10px] h-[10px] rounded-[2px]"
                style={{ backgroundColor: `var(--graph-${level})` }}
              />
            ))}
            <span className="font-mono text-[9px] text-muted-foreground ml-1">
              more
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 pt-6 border-t border-border">
            <Stat label="current streak" value={`${data.currentStreak} days`} />
            <Stat label="longest streak" value={`${data.longestStreak} days`} />
            {data.busiestDay && (
              <Stat
                label="busiest day"
                value={`${data.busiestDay.count}`}
                hint={formatDate(data.busiestDay.date)}
              />
            )}
          </dl>
        </>
      )}
    </section>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl leading-none tabular-nums text-foreground">
        {value}
      </dd>
      {hint && (
        <dd className="mt-1 font-mono text-[10px] text-muted-foreground">
          {hint}
        </dd>
      )}
    </div>
  );
}
