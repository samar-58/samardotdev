import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f7",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6b6862",
          }}
        >
          {siteConfig.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 130,
              lineHeight: 1,
              color: "#16150f",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "6px",
              background: "#b45309",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              color: "#6b6862",
              maxWidth: "820px",
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#b45309",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
