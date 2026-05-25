import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 900,
            color: "#5EEAD4",
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
