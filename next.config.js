/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  rewrites: async () => {
    return {
      fallback: [
        {
          source: "/rpc/:path*",
          destination: `https://beta.origins.com/rpc/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
