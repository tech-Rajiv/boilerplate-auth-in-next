// middleware.js
import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./app/lib/verifyAuth";

const PUBLIC_ROUTES = ["/login", "/signup"];
const PRIVATE_ROUTES = ["/dashboard", "/logout"];

export async function middleware(req: NextRequest) {
  const data = await verifyAuth();
  console.log("data middleware after verify: ", data);
  const token = data?.token;
  const path = req.nextUrl.pathname;

  if (token && PUBLIC_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && PRIVATE_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/dashboard/:path*", "/logout"],
};
