const withPlugins = require('next-compose-plugins');
const withPWA = require("next-pwa")
const runtimeCaching = require('next-pwa/cache')
const withSourceMaps = require('@zeit/next-source-maps');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const {
    NODE_ENV,
    SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    SENTRY_ENVIRONMENT,
    COMMIT_SHA,
} = process.env;

const isProd = NODE_ENV === "production";

process.env.SENTRY_DSN = SENTRY_DSN;

let env = {};
if (!!SENTRY_ENVIRONMENT) {
    env = {
        commitSha: COMMIT_SHA,
        sentryEnvironment: SENTRY_ENVIRONMENT,
    }
}

module.exports = withPlugins(
    [
        withPWA({
            pwa: {
                disable: !isProd,
                dest: "public",
                runtimeCaching
            }
        }),
        withSourceMaps({
            webpack(config, options) {
                // When all the Sentry configuration env variables are available/configured
                // The Sentry webpack plugin gets pushed to the webpack plugins to build
                // and upload the source maps to sentry.
                // This is an alternative to manually uploading the source maps
                // Note: This is disabled in development mode.
                if (
                    SENTRY_DSN &&
                    SENTRY_ORG &&
                    SENTRY_PROJECT &&
                    SENTRY_AUTH_TOKEN &&
                    COMMIT_SHA
                ) {
                    config.plugins.push(
                        new SentryWebpackPlugin({
                            include: '.next',
                            ignore: ['node_modules'],
                            urlPrefix: '~/_next',
                            release: COMMIT_SHA,
                        })
                    );
                }

                return config;
            }
        }),
    ],
    {
        env,
    }
)
