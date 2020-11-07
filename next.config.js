const withPlugins = require('next-compose-plugins');
const withPWA = require("next-pwa")
const runtimeCaching = require('next-pwa/cache')
const SentryCliPlugin = require('@sentry/webpack-plugin');

const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins(
    [
        withPWA({
            pwa: {
                disable: !isProd,
                dest: "public",
                runtimeCaching
            }
        })
    ],
    {
        plugins: [
            new SentryCliPlugin({
                include: '.',
                ignoreFile: '.sentrycliignore',
                ignore: ['node_modules', 'webpack.config.js'],
                configFile: 'sentry.properties',
            }),
        ],
    }
)
