/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    WEB_3_FORMS_KEY: "740199fc-b464-4353-9bc1-e9f1d872b45a",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ijdb.com.pl",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
