/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Lint errors shouldn't block a production build (run `npm run lint` separately).
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ["res.cloudinary.com", "picsum.photos", "fastly.picsum.photos"],
  },
  env: {
    // Resolved from build-time env (Docker build args); falls back to localhost for `npm run dev`.
    LOCALHOST: process.env.LOCALHOST ?? "http://localhost:3002",
    DEPLOYMENTLINK: process.env.DEPLOYMENTLINK ?? "http://localhost:3002",
  },
};

export default nextConfig;
