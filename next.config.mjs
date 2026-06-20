/** @type {import('next').NextConfig} */
const nextConfig = {
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
