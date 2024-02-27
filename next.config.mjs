/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    LOCALHOST: "http://localhost:3002",
    DEPLOYMENTLINK: "https://blog-application-frontend-steel.vercel.app/",
  },
};

export default nextConfig;
