module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hair-loss',
        permanent: true,
      },
    ];
  },
};
