import type { NextConfig } from "next";

const path = require('path');

const nextConfig: NextConfig = {
   reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Ajoutez les domaines d'images que vous utilisez
  },
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  
};


module.exports = nextConfig;

// export default nextConfig;
