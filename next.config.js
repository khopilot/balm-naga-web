/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  // Disable workbox/PWA features for now to avoid caching issues
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });
    return config;
  },
  // Add proper headers for video files
  async headers() {
    return [
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Accept-Ranges',
            value: 'bytes'
          },
          {
            key: 'Content-Type',
            value: 'video/mp4'
          }
        ],
      },
    ];
  }
};

module.exports = nextConfig; 