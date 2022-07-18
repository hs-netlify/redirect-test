/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // async rewrites() {
  //   return {
  //     fallback: [
  //       {
  //         source: "/:path*",
  //         destination: "https://docs.netlify.com/:path*",
  //       },
  //     ],
  //   };
  // },
};

module.exports = nextConfig;
