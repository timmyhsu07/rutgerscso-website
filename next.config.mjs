/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so it can be hosted free on GitHub Pages / any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
