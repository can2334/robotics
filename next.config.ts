import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "./",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Clickjacking koruması
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // MIME sniffing koruması
          { key: "X-Content-Type-Options", value: "nosniff" },

          // Referrer gizliliği
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Permissions-Policy (kamera, mikrofon, lokasyon vb.)
          { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=(), autoplay=()" },

          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: process.env.NODE_ENV === "development" ?
              // Development mod: inline scriptleri çalıştırmak için gevşek CSP
              `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; object-src 'none';`
              :
              // Production mod: inline scriptleri hash/nonce ile güvenli şekilde engelle
              `default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' https:; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; object-src 'none';`
          },

          // HSTS (HTTPS zorunlu)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
