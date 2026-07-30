export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export type ContributionDay = {
  date: string;
  count: number;
  level: ContributionLevel;
};

export type ContributionData = {
  total: number;
  weeks: (ContributionDay | null)[][];
  currentStreak: number;
  longestStreak: number;
  busiestDay: ContributionDay | null;
  months: { label: string; weekIndex: number }[];
};

type ApiResponse = {
  total: Record<string, number>;
  contributions: { date: string; count: number; level: number }[];
};

const ENDPOINT = "https://github-contributions-api.jogruber.de/v4";

/**
 * Fetches the last year of public contributions for a GitHub user.
 * Revalidated hourly so the graph stays fresh without client-side JS.
 * Returns null on failure so callers can render a graceful fallback.
 */
export async function getContributions(
  username: string
): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      `${ENDPOINT}/${encodeURIComponent(username)}?y=last`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const json = (await res.json()) as ApiResponse;
    if (!Array.isArray(json.contributions) || json.contributions.length === 0) {
      return null;
    }

    const days: ContributionDay[] = json.contributions.map((d) => ({
      date: d.date,
      count: d.count,
      level: Math.min(4, Math.max(0, d.level)) as ContributionLevel,
    }));

    return {
      total: Object.values(json.total ?? {}).reduce((a, b) => a + b, 0),
      weeks: toWeeks(days),
      currentStreak: currentStreak(days),
      longestStreak: longestStreak(days),
      busiestDay: busiestDay(days),
      months: monthLabels(days),
    };
  } catch {
    return null;
  }
}

/** Groups days into week columns, padding the first week so rows align to weekday. */
function toWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  const weeks: (ContributionDay | null)[][] = [];
  const leadingBlanks = new Date(days[0].date).getUTCDay();
  let week: (ContributionDay | null)[] = Array(leadingBlanks).fill(null);

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    weeks.push([...week, ...Array(7 - week.length).fill(null)]);
  }

  return weeks;
}

/** Counts back from the most recent day, tolerating an empty today. */
function currentStreak(days: ContributionDay[]): number {
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      streak++;
    } else if (i === days.length - 1) {
      continue;
    } else {
      break;
    }
  }
  return streak;
}

function longestStreak(days: ContributionDay[]): number {
  let longest = 0;
  let running = 0;
  for (const day of days) {
    running = day.count > 0 ? running + 1 : 0;
    if (running > longest) longest = running;
  }
  return longest;
}

function busiestDay(days: ContributionDay[]): ContributionDay | null {
  return days.reduce<ContributionDay | null>(
    (best, day) => (!best || day.count > best.count ? day : best),
    null
  );
}

/** One label per month, positioned at the week column where that month begins. */
function monthLabels(days: ContributionDay[]): {
  label: string;
  weekIndex: number;
}[] {
  const labels: { label: string; weekIndex: number }[] = [];
  const leadingBlanks = new Date(days[0].date).getUTCDay();
  let seen = "";

  days.forEach((day, index) => {
    const date = new Date(day.date);
    const month = `${date.getUTCFullYear()}-${date.getUTCMonth()}`;
    if (month !== seen) {
      seen = month;
      labels.push({
        label: date.toLocaleString("en-US", {
          month: "short",
          timeZone: "UTC",
        }),
        weekIndex: Math.floor((index + leadingBlanks) / 7),
      });
    }
  });

  // Drop a first label that would collide with the second column.
  return labels.filter(
    (label, i) => i === 0 || label.weekIndex - labels[i - 1].weekIndex >= 3
  );
}
