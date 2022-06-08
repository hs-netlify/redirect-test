/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      fallback: [
        {
          source: "/reviews/:slug*",
          destination: `https://www.photographyblog.com/reviews/:slug*`,
        },
        {
          source: "/:slug*",
          destination: `https://www.photographyblog.com/:slug*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
