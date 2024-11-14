/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com', 'static.wanted.co.kr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'static.wanted.co.kr'
      }
    ],
    unoptimized: true
  }
};

export default nextConfig;
