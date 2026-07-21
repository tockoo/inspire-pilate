import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image Open Graph générée dynamiquement (aux couleurs de la marque).
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F2EA",
          color: "#5C4632",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: 12, color: "#9C8368" }}>
          INSPIRE
        </div>
        <div style={{ fontSize: 18, letterSpacing: 16, color: "#9C8368", marginBottom: 30 }}>
          PILATES
        </div>
        <div style={{ fontSize: 64, fontStyle: "italic", textAlign: "center", maxWidth: 900 }}>
          Un espace dédié à votre équilibre
        </div>
        <div style={{ fontSize: 28, color: "#7A5C41", marginTop: 24 }}>
          Studio de Pilates · Vertou
        </div>
      </div>
    ),
    { ...size }
  );
}
