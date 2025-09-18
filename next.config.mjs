/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
    basePath: '/blogs',        // 👈 ensures routes work from /blogs
    assetPrefix: '/blogs/',    // 👈 ensures CSS/JS assets load from /blogs
    trailingSlash: true,
}

export default nextConfig
