/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'ddragon.leagueoflegends.com',
            port: '',
            pathname: '/cdn/**',
          },
        ],
      },
}

module.exports = nextConfig
