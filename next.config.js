/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ]
  },
  // reactStrictMode: true,
  // webpack: (config, { nextRuntime }) => {
  //   if (typeof nextRuntime === "undefined") {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //       net: false,
  //       tls: false,
  //     };
  //   }
  //   config.externals.push("pino-pretty", "lokijs", "encoding");
  //   return config;
  // }
};

module.exports = nextConfig;
