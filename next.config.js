/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.jsx", "page.js"],
  images: {
    domains: ["picsum.photos"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    // eslint-disable-next-line no-param-reassign
    config.module.generator.asset.publicPath = "/_next/";
    return config;
  },
};

module.exports = nextConfig;
