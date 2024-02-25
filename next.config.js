/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
      },
      typescript: {
        ignoreBuildErrors: true
      },
    	images: {
        domains: ['cdn.sanity.io']
      },
      reactStrictMode: false
}

module.exports = nextConfig
