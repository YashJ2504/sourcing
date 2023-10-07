/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    protocol: 'https://',
    baseUrl: 'http://localhost:5001/sourcign-19bb3/us-central1/app'
  },
}

module.exports = nextConfig
