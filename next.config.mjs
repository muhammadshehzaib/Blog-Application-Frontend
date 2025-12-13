/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    LOCALHOST: "http://localhost:3002",
    DEPLOYMENTLINK: "http://localhost:3002",
  },
};

export default nextConfig;
