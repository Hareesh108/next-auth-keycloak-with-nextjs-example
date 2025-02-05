# NextAuth v5 + Keycloak Integration Example (Next js and Typescript)

#### A demonstration of integrating Keycloak authentication with Next.js using NextAuth v5 (Auth.js). This example covers token refresh, session management, and secure API calls for both server and client components

### 🔑 Key Features

- Keycloak OAuth 2.0/OpenID Connect integration with NextAuth v5
- Auto-refresh expired access tokens using refresh tokens
- Server-side session validation with JWT callbacks
- Client-side token expiration checks and reactive handling
- Secure API routes with authenticated access
- Error handling for token refresh failures

### .env.local

- AUTH_KEYCLOAK_ID=<keycloak clinet id>
- AUTH_KEYCLOAK_SECRET=<keycloak clinet secret>
- AUTH_KEYCLOAK_ISSUER=<keycloak clinet issuer or host>
- AUTH_SECRET=<can generate with command check in docs>

- NODE_ENV="development"
