/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "picsum.photos", "fastly.picsum.photos"],
  },
  env: {
    LOCALHOST: "http://localhost:3002",
    DEPLOYMENTLINK: "https://blog-application-v3ed.onrender.com",
  },
};

export default nextConfig;
