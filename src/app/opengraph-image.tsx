import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sarah Wang — Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F172A",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: 64,
            height: 4,
            background: "#5EEAD4",
            marginBottom: 40,
            borderRadius: 2,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#E2E8F0",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Sarah Wang
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#94A3B8",
            marginBottom: 32,
          }}
        >
          Full Stack Engineer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#5EEAD4",
            fontWeight: 400,
          }}
        >
          I build warm, useful AI-powered personal tools.
        </div>

        {/* Domain — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 18,
            color: "#475569",
            letterSpacing: "1px",
          }}
        >
          sarah.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
