import authConfig from "./auth.config"
import NextAuth from "next-auth"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req) {
    console.log(req,"req");

    if (!req.auth && req.nextUrl.pathname !== "/") {
      const newUrl = new URL("/", req.nextUrl.origin)
      return Response.redirect(newUrl)
    }
    
  // Your custom middleware logic goes here
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}