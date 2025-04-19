const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com/ https://static.cloudflareinsights.com/ https://www.youtube.com/;
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
    img-src 'self' https://i.ytimg.com blob: data: ;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    frame-src https://www.youtube.com https://www.google.com https://form.typeform.com/ https://www.youtube.com/ https://www.youtube-nocookie.com/;
`;

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
