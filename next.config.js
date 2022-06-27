// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// // -------------

// const withMDX = require('@next/mdx')({
//   extension: /\.(md|mdx)$/,
// })

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// })

module.exports = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    loader: 'akamai',
    path: '',
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime'),
    }

    config.resolve = {
      ...config.resolve,

      fallback: {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        // 'builtin-modules': false,
        // worker_threads: false,
      },
    }

    return config
  },
}