/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    domains: ['ckeaqzcqkqjcrbnhcbnl.supabase.co']
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  }
}

module.exports = nextConfig
