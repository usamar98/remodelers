import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LuxeCraft Kitchen Studio luxury kitchen remodeling";
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
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #17130f 0%, #262018 45%, #0f0e0c 100%)",
          color: "#f3ead6",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 8,
              border: "1px solid #c8a766",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c8a766",
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            LC
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>
            LuxeCraft Kitchen Studio
          </div>
        </div>

        <div>
          <div style={{ color: "#c8a766", fontSize: 28, marginBottom: 24 }}>
            Luxury kitchen remodeling
          </div>
          <div
            style={{
              maxWidth: 870,
              fontSize: 76,
              lineHeight: 0.98,
              fontWeight: 700,
            }}
          >
            Designed Around Your Lifestyle
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, color: "#d8ccb6", fontSize: 24 }}>
          <span>Custom cabinetry</span>
          <span>Stone countertops</span>
          <span>Kitchen renovation</span>
        </div>
      </div>
    ),
    size,
  );
}
