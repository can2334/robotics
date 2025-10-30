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

          // Content Security Policy (XSS ve script injection koruması)
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
               script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https:;
              font-src 'self' https://fonts.gstatic.com;
              frame-ancestors 'none';
            `.replace(/\n/g, ''),
          },

          // HSTS (HTTPS zorunlu)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
