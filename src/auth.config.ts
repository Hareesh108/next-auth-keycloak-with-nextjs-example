import type { NextAuthConfig } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

declare module "next-auth" {
  interface User {
    access_token?: string;
    roles?: string[];
    refresh_token?: string
  }
}

export default {
  providers: [
    KeycloakProvider({
      clientId: process.env.AUTH_KEYCLOAK_ID || "",
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET || "",
      issuer: process.env.AUTH_KEYCLOAK_ISSUER || "",
    //   authorization: {
    //     params: {
    //       scope: "openid email profile",
    //     },
    //   },
    }),
  ],
//   pages: {
//     signIn: "/auth/login",
//     signOut: "/auth/logout",
//     error: "/auth/error",
//   },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60, 
  },
  callbacks: {
    async jwt({ token, account, profile }) {      
      if (account) {
        token.access_token = account.access_token
        token.idToken = account.id_token
        token.roles = profile?.roles || []
        token.refresh_token = account.refresh_token
      }
      return token
    },
    async session({ session, token }) { 
      if (session.user) {
        session.user.access_token = token.access_token as string
        session.user.refresh_token = token.refresh_token as string
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  trustHost: true,
} satisfies NextAuthConfig