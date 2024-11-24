module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://multischooll-api-nest.vercel.app/:path*',
        // destination: 'http://localhost:3500/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
