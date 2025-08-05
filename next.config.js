/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/PortfolioSite",
  output: "export", // <=== enables static exports
  distDir: "./dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
