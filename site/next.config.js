/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://developtica.github.io/dpca-workspace/',
    contactUrl: 'https://github.com/developtica/dpca-workspace/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/dpca-workspace/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
