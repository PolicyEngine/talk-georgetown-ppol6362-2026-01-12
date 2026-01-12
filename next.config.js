/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/talk-georgetown-ppol6362-2026-01-12' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
