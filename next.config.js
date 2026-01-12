/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Georgetown-2026' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
