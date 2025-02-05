/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AUTH_KEYCLOAK_ISSUER: process.env.AUTH_KEYCLOAK_ISSUER,

    }
};

export default nextConfig;
