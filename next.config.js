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
      ],
    };
  },
};

module.exports = nextConfig;
