import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "./", // proje kökü
  },

  async headers() {
    return [
      {
        source: "/(.*)", // tüm sayfalar
        headers: [
          // Clickjacking koruması
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // MIME sniffing koruması
          { key: "X-Content-Type-Options", value: "nosniff" },

          // Referrer gizliliği
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Permissions-Policy (kamera, mikrofon, lokasyon vb.)
          { key: "Permissions-Policy", value: "geolocation=(), camera=(), microphone=(), autoplay=()" },

          // HSTS (HTTPS zorunlu)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
