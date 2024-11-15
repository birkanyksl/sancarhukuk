import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "assets.algoexpert.io",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/images/**',
              },
              {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/**', 
              },
              {
                protocol: 'https',
                hostname: 'sancarhukuk-server.vercel.app',
                
                
              },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',  
                destination: 'https://sancarhukuk-server.vercel.app//api/:path*', 
            },
        ];
    },
};

export default withNextIntl(nextConfig);
