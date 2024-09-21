import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const token = await getToken({ req: request });
    const isAuthRoute = pathname.startsWith('/api/auth/signin');
    const protectedRoutes = ['/profile'];
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
    if (token && isAuthRoute) {
        return NextResponse.redirect(new URL('/profile', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/profile', '/api/auth/signin'],
};
