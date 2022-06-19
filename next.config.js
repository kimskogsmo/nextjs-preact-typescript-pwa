const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const path = require('path');
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
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
});
