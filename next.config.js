/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      fallback: [
        {
          source: "/:slug*",
          destination: `https://www.photographyblog.com/:slug*`,
        },
        {
          source: "/:slug*",
          destination: `/404`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
