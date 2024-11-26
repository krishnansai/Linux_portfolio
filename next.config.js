/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  
    // Optional: Base path for GitHub Pages
    basePath: "/Linux_portfolio", // Change this to match your GitHub repository name
    assetPrefix: "/Linux_portfolio/",
  
    // Image optimization settings for static export
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  