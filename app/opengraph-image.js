import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tasnimul Ehsan Fahad — AI, Technology & Digital Experiments";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "#0a0a0a",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#a3a3a3",
            marginBottom: 28,
          }}
        >
          Tasnimul Ehsan Fahad
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          AI, Technology
          <br />
          & Digital Experiments.
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#bdbdbd",
            marginTop: 32,
          }}
        >
          Curious by default. Building things worth exploring.
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#777",
            marginTop: 55,
          }}
        >
          tefahad.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
