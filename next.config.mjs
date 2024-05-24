/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.istockphoto.com',
                port: '',
            }
        ]
    }
};

export default nextConfig;
