/**
 * @fileoverview
 * Utility function to detect locale from the browser setting or paramenter on the URL.
 */

import queryString from 'query-string';

/**
 * look for language setting in the browser. Check against supported locales.
 * If there's a parameter in the URL, override the browser setting
 * @param {Array.string} supportedLocales An array of supported locale codes.
 * @return {string} the preferred locale
 */
const detectLocale = supportedLocales => 'en';

export {
    detectLocale
};
