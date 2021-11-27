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
  env: {
    QUIZ_URL: process.env.NEXT_PUBLIC_QUIZ_URL,
  },
};
