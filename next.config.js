/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@ant-design/icons-svg",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-table",
    "rc-tree",
  ],
  output: "export",
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
