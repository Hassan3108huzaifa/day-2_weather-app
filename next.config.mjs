// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.weatherapi.com',
          pathname: '/**',
        },
      ],
    },
  };
  