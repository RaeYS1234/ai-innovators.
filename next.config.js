/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/enroll.html",
        destination: "/enroll",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;


