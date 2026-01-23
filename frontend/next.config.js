const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: { unoptimized: true },

  compiler: {
    reactRemoveProperties: true,
    styledComponents: true,
  },
};

module.exports = nextConfig;
