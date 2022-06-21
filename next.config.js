/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  rewrites: async () => {
    return {
      fallback: [
        {
          source: "/:slug*",
          destination: `https://docs.netlify.com/:slug*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
