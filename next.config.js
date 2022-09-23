/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/no/en/:path*",
        destination: "https://proxied-site-test.netlify.app/test/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
