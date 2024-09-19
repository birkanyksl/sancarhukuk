import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.pexels.com"
            },
            {
                protocol:"https",
                hostname:"assets.algoexpert.io"
            },
            {
                protocol:"https",
                hostname:"img.freepik.com"
            },
        ]
    }
};

export default withNextIntl(nextConfig);
