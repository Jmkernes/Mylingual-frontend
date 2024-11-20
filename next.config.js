/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/creators/profile',
        destination: '/creators/profile/creator_settings',
        permanent: true,
      },
      {
        source: '/creators/personality',
        destination: '/creators/personality/persona',
        permanent: true,
      },
      {
        source: '/creators/voice',
        destination: '/creators/voice/my_voices',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/users/@:username',
        destination: '/users/profile/:username'
      }
    ]
  }
};

module.exports = nextConfig;