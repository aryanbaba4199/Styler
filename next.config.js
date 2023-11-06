/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.dummyjson.com", "i.stack.imgur.com", "res.cloudinary.com","i.im.ge"]
    
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
