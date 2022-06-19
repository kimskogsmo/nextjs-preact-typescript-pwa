const path = require('path');
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa');
const withPreact = require('next-plugin-preact');
const withPlugins = require('next-compose-plugins');

const headers = async () => {
    return [
        {
            source: '/(.*)',
            headers: [
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                }
            ],
        },
    ]
}

const nextConfig = {
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles'),
        ],
    },
    i18n: {
        locales: ['en', 'sv'],
        defaultLocale: 'en'
    },
    poweredByHeader: false,
}

module.exports = withPlugins([
    [withPWA, {
        pwa: {
            dest: 'build',
            runtimeCaching,
            buildExcludes: [/middleware-manifest.json$/]
        },
        headers
    }],
    [withPreact, {}]
], nextConfig);