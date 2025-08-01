// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,
  },productionBrowserSourceMaps: false,
});

