/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      fallback: [
        {
          source: "/:slug*",
          destination: `https://www.netlify.com/:slug*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
