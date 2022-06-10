/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/gtv-videos-bucket/sample/:slug*",
        destination:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/:slug*",
        permanent: true,
      },
      // {
      //   source: "/:slug*",
      //   destination: `https://docs.netlify.com/:slug*`,
      // },
    ];
  },
};

module.exports = nextConfig;
