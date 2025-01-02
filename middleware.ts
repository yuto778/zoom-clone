import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const protectedRoutes = createRouteMatcher([
//   '/','/upcoming', '/previous','/recodings','/personal-room','/meeting(.*)'
// ])

const isIgnoredRoutes = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // if (protectedRoutes(req)) auth.protect()
  if (!isIgnoredRoutes(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
