// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  const isMobile = /iphone|ipod|ipad|android|blackberry|windows phone|opera mini|mobile/.test(
    ua
  );

  // If NOT mobile → Redirect to indileaks
  if (!isMobile) {
    return NextResponse.redirect("https://indileaks.vercel.app");
  }

  // Mobile users → allow site normally
  return NextResponse.next();
}

// Apply to all routes
export const config = {
  matcher: ["/:path*"],
};
