/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/no/en/:path*",
        destination: "https://localhost:8888/test/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
