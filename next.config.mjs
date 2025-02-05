/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AUTH_KEYCLOAK_ISSUER: process.env.AUTH_KEYCLOAK_ISSUER,
        AUTH_KEYCLOAK_ID: process.env.AUTH_KEYCLOAK_ID,
        AUTH_KEYCLOAK_SECRET: process.env.AUTH_KEYCLOAK_SECRET,
        NODE_ENV: process.env.NODE_ENV,
    }
};

export default nextConfig;
