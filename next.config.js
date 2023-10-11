/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "lecture-1.vercel.app",
  //     port: "",
  //     pathname: "*",
  //   },
  // ],
  images: {
    // domains: ["lecture-1.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lecture-1.vercel.app",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "search.pstatic.net",
        port: "",
      },
    ],
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
};

module.exports = nextConfig;
