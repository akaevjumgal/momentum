import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = !!request.cookies.get('accessToken');

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/web/:path*',
};
