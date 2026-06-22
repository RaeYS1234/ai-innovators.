/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/enroll",
        destination: "/enroll.html",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;


