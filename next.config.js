// @ts-check

// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self';
//   child-src example.com;
//   style-src 'self' example.com;
//   font-src 'self';
//   frame-ancestors 'none';
// `;

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  // X-DNS-Prefetch-Control -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Strict-Transport-Security -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // X-XSS-Protection -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Permissions-Policy -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), midi=(), usb=(), bluetooth=(), payment=()',
  },
  // X-Content-Type-Options -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Referrer-Policy -> https://scotthelme.co.uk/a-new-security-header-referrer-policy/
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // Content-Security-Policy -> https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  // },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // removeConsole: true,

  images: {
    domains: ['ck.directus.app'],
  },

  i18n: {
    locales: ['da', 'en'],
    defaultLocale: 'da',
    localeDetection: false,
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
