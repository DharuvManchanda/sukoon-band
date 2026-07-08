/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't 308-redirect trailing slashes; let legacy WordPress URLs
  // (e.g. /comments/feed/) hit the middleware and return 410 directly.
  skipTrailingSlashRedirect: true,
  images: {
    // Serve modern formats; the optimizer downscales the large source files.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
