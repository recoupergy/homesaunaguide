import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#17372f", color: "#fffdf8", fontFamily: "serif", fontSize: 280, border: "32px solid #d76538" }}>H</div>, size);
}
