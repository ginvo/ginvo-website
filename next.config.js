/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack }
  ) => {
    // Al final esto no sirve porque Next tiene soporte con CSS y SASS
    // Filter out default Next.js CSS rules:
    // config.module.rules = config.module.rules.filter(r => !r.oneOf);

    config.module.rules.push({
      // \.s[ac]ss$ se agrega con | junto como expresion regular que cierra con /i
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        // Para usar svg como componentes
        "@svgr/webpack",
        // Esto tampoco sirve porque Next se hace cargo
        // Creates 'style' nodes from JS strings
        // "style-loader",
        // Translates CSS into CommonJS
        // "css-loader",
        // Compiles Sass to CSS
        // "sass-loader",
      ],
    });

    return config;
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // Next se hace cargo de compilar el sass importado con esta linea y la libreria path
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig