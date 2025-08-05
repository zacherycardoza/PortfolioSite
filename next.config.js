/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/zacherycardoza.github.io",
  output: "export", // <=== enables static exports
  distDir: "./dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
