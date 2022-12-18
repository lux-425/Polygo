/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // assetPrefix: '.',
  env: {
    API_URL: 'http://localhost:8000',
  },
};

module.exports = nextConfig;
