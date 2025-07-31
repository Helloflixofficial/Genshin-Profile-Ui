/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/attachments/**',
      },
    ],
    // Add this for better optimization and loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Ensure static files are handled properly
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // Force static export if needed (uncomment if you want static deployment)
  // output: 'export',
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;