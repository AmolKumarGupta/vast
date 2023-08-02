/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'docs',
    assetPrefix: process.env.NODE_ENV === "production" ? '/blog' : '',
    env: {
        ASSET_PREFIX: process.env.NODE_ENV === "production" ? '/blog' : '',
    },
}

module.exports = nextConfig
