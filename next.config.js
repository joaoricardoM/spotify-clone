/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    domains: ['ckeaqzcqkqjcrbnhcbnl.supabase.co']
  }
}

module.exports = {
  // ...
  nextConfig,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  }
}
